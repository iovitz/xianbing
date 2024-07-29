const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define(
  'voice',
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
    voiceUrl: {
      field: 'voice_url',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lyricId: {
      field: 'lyric_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authorId: {
      field: 'author_id',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // 播放次数
    playCount: {
      field: 'play_count',
      type: DataTypes.INTEGER,
      default: 0,
      allowNull: false,
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  },
);
