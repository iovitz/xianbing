"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const C1 = app.model.define("c1", {
    id: {
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(10),
      allowNull: false,
    },
    state: {
      type: BOOLEAN,
    },
  });

  return C1;
};
