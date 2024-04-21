"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, FLOAT, BOOLEAN } = app.Sequelize;

  const Book = app.model.define("book", {
    id: {
      field: "id",
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: STRING,
      allowNull: false,
    },
    c1: {
      field: "c1",
      type: STRING,
      allowNull: false,
    },
    c2: {
      field: "c2",
      type: STRING,
      allowNull: false,
    },
    author: {
      field: "author",
      type: STRING,
      allowNull: false,
    },
    poster: {
      field: "poster",
      type: STRING(100),
      allowNull: false,
    },
    price: {
      field: "price",
      type: FLOAT,
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return Book;
};
