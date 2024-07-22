"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Model = app.model.define("user", {
    id: {
      field: "id",
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      field: "user_id",
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
    username: {
      field: "username",
      type: STRING(20),
      allowNull: false,
    },
    password: {
      field: "password",
      type: STRING(60),
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return Model;
};
