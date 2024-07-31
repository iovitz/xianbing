const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Lyric extends Model {
    associate() {
    }
  }
  Lyric.init({
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
    name: {
      field: 'name',
      type: DataTypes.STRING(100),
      comment: '歌名',
    },
    content: {
      field: 'lyric',
      type: DataTypes.TEXT,
      comment: '歌词内容',
    },
    cover: {
      field: 'cover',
      type: DataTypes.STRING(100),
      comment: '封面图',
    },
    useNumber: {
      field: 'useNumber',
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '使用次数',
    },
    authorId: {
      field: 'authorId',
      type: DataTypes.STRING(10),
      references: {
        model: 'User',
        key: 'id',
      },
      comment: '发布用户的ID',
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
      comment: '状态',
    },
  }, {
    tableName: 'lyric',
    sequelize,
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
  });
};
