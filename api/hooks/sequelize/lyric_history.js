const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class LyricHistory extends Model {
    static associate() {
    }
  }
  LyricHistory.init({
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
    userId: {
      field: 'userId',
      type: DataTypes.STRING(10),
      references: {
        model: 'User',
        key: 'id',
      },
      allowNull: false,
      comment: '用户ID',
    },
    lyricId: {
      field: 'lyricId',
      type: DataTypes.STRING(10),
      references: {
        model: 'Lyric',
        key: 'id',
      },
      allowNull: false,
      comment: '歌词ID',
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: '状态',
    },
  }, {
    tableName: 'LyricHistory',
    sequelize,
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
  });
};
