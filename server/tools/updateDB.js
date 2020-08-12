import AppDAO from "../src/data/AppDAO.js";

async function init() {
  const dao = AppDAO;
  await dao.run("ALTER TABLE suppliers ADD phone2 TEXT;");
  // 更新

  AppDAO.close();
}

init();
