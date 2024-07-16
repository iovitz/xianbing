"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const User = app.model.define("user", {
    id: {
      field: "id",
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      field: "uid",
      type: STRING(10),
      allowNull: false,
    },
    nickname: {
      field: "nickname",
      type: STRING(10),
      allowNull: false,
    },
    avatar: {
      field: "avatar",
      type: STRING(100),
      allowNull: false,
    },
    uname: {
      field: "uname",
      type: STRING(20),
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
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return User;
};
