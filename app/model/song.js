"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const SongWords = app.model.define("song", {
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
    voice: {
      field: "words",
      type: STRING(100),
      allowNull: false,
    },
    wordId: {
      field: "wordId",
      type: INTEGER,
      allowNull: false,
    },
    authorId: {
      field: "authorId",
      type: INTEGER,
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return SongWords;
};
