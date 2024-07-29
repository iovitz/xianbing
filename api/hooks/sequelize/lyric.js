const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define(
  'lyric',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      field: 'lyric',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      field: 'cover',
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    useCount: {
      field: 'use_count',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    authorId: {
      field: 'authorId',
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  },
);
