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
      allowNull: false,
      comment: '雪花ID',
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '歌名',
    },
    content: {
      field: 'lyric',
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '歌词内容',
    },
    cover: {
      field: 'cover',
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: '封面图',
    },
    useNumber: {
      field: 'useNumber',
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: '使用次数',
    },
    authorId: {
      field: 'authorId',
      type: DataTypes.STRING(10),
      references: {
        model: 'User',
        key: 'id',
      },
      allowNull: false,
      comment: '发布用户的ID',
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: '状态',
    },
  }, {
    sequelize,
    tableName: 'lyric',
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
  });
};
