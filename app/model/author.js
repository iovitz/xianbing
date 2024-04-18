"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Author = app.model.define("author", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(100),
    state: BOOLEAN,
  });

  return Author;
};
