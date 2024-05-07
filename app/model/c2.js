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
    id_c1: {
      field: "id_c1",
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
    C2.belongsTo(app.model.C1, { foreignKey: "id_c1", targetKey: "id", as: "c1" });
    C2.hasMany(app.model.Book, { foreignKey: "id_c2", targetKey: "id", as: "book" });
  };

  return C2;
};
