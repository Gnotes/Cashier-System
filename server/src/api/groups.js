import express from "express";
import GroupTask from "../tasks/groups.js";
import { groupSchema } from "../schema/group.js";
import { throwError } from "../middleware/handleError.js";
import { validBody } from "../middleware/validBody.js";

const route = express.Router();

route.get("/", async (req, res) => {
  // 获取所有用户组以及权限详情

  const queryGroupsResult = await GroupTask.getAllGroup();
  res.json(queryGroupsResult);
});

route.post("/create", validBody(groupSchema, "用户组信息不正确!"), async (req, res, next) => {
  // 建立新的用户组
  const { usergroup } = req.body;
  if (usergroup) {
    const validResult = await GroupTask.getGroupDetails(usergroup);
    if (validResult) {
      return throwError(next, "此用户组已存在!");
    }
  }

  await GroupTask.createGroup(usergroup, []);
  const queryResult = await GroupTask.getGroupDetails(usergroup);
  res.json(queryResult);
});

export default route;
