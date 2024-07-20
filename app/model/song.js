"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Song = app.model.define("song", {
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
    voiceUrl: {
      field: "voiceUrl",
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

  return Song;
};
