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
    id_c1: {
      field: "id_c1",
      type: STRING,
      allowNull: false,
    },
    id_c2: {
      field: "id_c2",
      type: STRING,
      allowNull: false,
    },
    id_author: {
      field: "id_author",
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

  Book.associate = function () {
    Book.belongsTo(app.model.C1, { foreignKey: "id_c1", targetKey: "id", as: "c1" });
    Book.belongsTo(app.model.C2, { foreignKey: "id_c2", targetKey: "id", as: "c2" });
    Book.belongsTo(app.model.Author, { foreignKey: "id_author", targetKey: "id", as: "author" });
  };

  return Book;
};
