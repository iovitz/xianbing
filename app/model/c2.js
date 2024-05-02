"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const C2 = app.model.define("c2", {
    id: {
      field: "id",
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    c1: {
      field: "c1",
      type: INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      field: "name",
      type: STRING(200),
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  C2.associate = function () {
    C2.belongsTo(app.model.C1, { foreignKey: "c1", targetKey: "id", as: "c1_info" });
  };

  return C2;
};
