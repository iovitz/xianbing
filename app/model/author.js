"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Author = app.model.define("author", {
    id: {
      field: "id",
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: STRING(100),
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return Author;
};
