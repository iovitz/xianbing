"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN, FLOAT } = app.Sequelize;

  const C2 = app.model.define("c2", {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    c1: {
      type: STRING,
      allowNull: false,
    },
    c2: {
      type: STRING,
      allowNull: false,
    },
    author: {
      type: STRING,
      allowNull: false,
    },
    poster: {
      type: STRING(100),
      allowNull: false,
    },
    price: {
      type: FLOAT,
      allowNull: false,
    },
    state: {
      type: BOOLEAN,
    },
  });

  return C2;
};
