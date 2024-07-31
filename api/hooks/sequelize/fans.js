const { DataTypes, Model } = require('sequelize');

module.exports = function (sequelize) {
  class Fans extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      this.belongsTo(models.User, { foreignKey: 'fans_id', as: 'fans' });
    }
  }

  Fans.init({
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
    userId: {
      field: 'user_id',
      type: DataTypes.STRING(10),
      comment: '被关注的用户ID',
    },
    fansId: {
      field: 'fans_id',
      type: DataTypes.STRING(10),
      comment: '关注者的ID',
    },
    state: {
      field: 'state',
      type: DataTypes.BOOLEAN,
      comment: '状态',
    },
  }, {
    tableName: 'fans',
    sequelize,
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
  });
};
