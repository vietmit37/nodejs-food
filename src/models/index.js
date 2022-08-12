const { Sequelize } = require("sequelize");
const {
  db_host,
  db_user,
  db_pass,
  db_name,
  db_dialect,
  db_port,
} = require("../config/index");
const sequelize = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  dialect: db_dialect,
  port: db_port,
});
module.exports = sequelize;
