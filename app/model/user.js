"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const User = app.model.define("user", {
    id: {
      field: "id",
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: STRING(10),
      allowNull: false,
    },
    pwd: {
      field: "pwd",
      type: STRING(60),
      allowNull: false,
    },
    address: {
      field: "address",
      type: STRING(100),
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
      allowNull: false,
    },
  });

  return User;
};