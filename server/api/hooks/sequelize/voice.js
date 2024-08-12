const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Voice extends Model {
  }
  Voice.init({
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '自增ID',
    },
    id: {
      field: 'id',
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false,
      comment: '雪花ID',
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '歌曲名',
    },
    description: {
      field: 'description',
      type: DataTypes.STRING(1000),
      allowNull: false,
      comment: '歌曲描述',
    },
    voiceUrl: {
      field: 'voiceUrl',
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '歌曲名',
    },
    authorId: {
      field: 'authorId',
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
      comment: '作者ID',
    },
    lyricId: {
      field: 'lyricId',
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'Lyric',
        key: 'id',
      },
      comment: '歌词ID',
    },
    playNumber: {
      field: 'playNumber',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '播放次数',
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: '状态',
    },
  }, {
    sequelize,
    tableName: 'voice',
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
  });
};
