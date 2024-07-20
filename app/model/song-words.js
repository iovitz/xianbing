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
    cover: {
      field: "cover",
      type: STRING(100),
      allowNull: true,
    },
    use: {
      field: "use",
      type: INTEGER,
      allowNull: true,
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
