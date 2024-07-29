const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define(
  'lyric_history',
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
    lyricId: {
      field: 'lyric_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  },
);
