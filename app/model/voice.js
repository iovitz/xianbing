"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Model = app.model.define("voice", {
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
      field: "voice_url",
      type: STRING(100),
      allowNull: false,
    },
    lyricId: {
      field: "lyric_id",
      type: INTEGER,
      allowNull: false,
    },
    authorId: {
      field: "author_id",
      type: INTEGER,
      allowNull: false,
    },
    state: {
      field: "state",
      type: BOOLEAN,
    },
  });

  return Model;
};
