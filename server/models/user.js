var Sequelize = require("sequelize"),
  passportLocalSequelize = require("passport-local-sequelize");

var mydb = new Sequelize("mydb", "myuser", "mypass", {
  dialect: "sqlite",
  storage: "users.sqlite"
});

var User = passportLocalSequelize.defineUser(mydb);
User.sync({forced: true})

module.exports = User;