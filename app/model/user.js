"use strict";

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define("user", {
    id: {
      field: "id",
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: STRING(10),
      allowNull: false,
    },
    username: {
      field: "username",
      type: STRING(20),
      allowNull: false,
    },
    password: {
      field: "password",
      type: STRING(72),
      allowNull: false,
    },
  });

  return User;
};
