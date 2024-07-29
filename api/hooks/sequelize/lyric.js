const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Lyric extends Model {
    associate() {
    }
  }
  Lyric.init({
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
      field: 'id',
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
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
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: 'lyric',
    sequelize,
  });
};
