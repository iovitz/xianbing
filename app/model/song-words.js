"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const SongWords = app.model.define("songWords", {
    id: {
      field: "id",
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "name",
      type: STRING(100),
      allowNull: false,
    },
    words: {
      field: "words",
      type: STRING(100),
      allowNull: false,
    },
    authorId: {
      field: "authorId",
      type: STRING(20),
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return SongWords;
};
