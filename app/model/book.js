"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Book = app.model.define("book", {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(200),
      allowNull: false,
    },
    state: {
      type: BOOLEAN,
    },
  });

  return Book;
};
