class Group {
  static addGroup(ajax, usergroup) {
    return ajax.post("/api/groups/create", {
      usergroup,
    });
  }
}

export default Group;
