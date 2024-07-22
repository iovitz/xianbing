"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Model = app.model.define("lyric", {
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
    lyric: {
      field: "lyric",
      type: STRING(100),
      allowNull: false,
    },
    cover: {
      field: "cover",
      type: STRING(100),
      allowNull: true,
    },
    useCount: {
      field: "use_count",
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

  return Model;
};
