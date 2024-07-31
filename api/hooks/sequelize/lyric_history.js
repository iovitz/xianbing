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
      comment: '雪花ID',
    },
    lyricId: {
      field: 'lyric_id',
      type: DataTypes.STRING(10),
      references: {
        model: 'Lyric',
        key: 'id',
      },
      comment: '歌词ID',
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
      comment: '状态',
    },
  }, {
    tableName: 'lyric_history',
    sequelize,
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
  });
};
