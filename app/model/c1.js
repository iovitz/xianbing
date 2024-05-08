"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const C1 = app.model.define("c1", {
    id: {
      field: "id",
      type: INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: STRING(10),
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  C1.associate = () => {
    C1.hasMany(app.model.C2, { foreignKey: "id_c1", targetKey: "id" });
    C1.hasMany(app.model.Book, { foreignKey: "id_c1", targetKey: "id" });
  };

  return C1;
};
