/**
 * Session
 *
 * @description :: 用户登录态表
 * @usage       :: sails.models.Session
 */

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Session extends Model {
  }
  Session.init(
    {
      id: {
        field: 'id',
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      sessionId: {
        field: 'sessionId',
        type: DataTypes.STRING(36),
        unique: true,
        allowNull: false,
        comment: '36位的UUID',
      },
      userId: {
        field: 'userId',
        type: DataTypes.STRING(10),
        unique: false,
        allowNull: false,
        comment: '用户ID',
      },
      state: {
        field: 'state',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '状态',
      },
    },
    {
      sequelize,
      tableName: 'session',
      charset: 'utf8mb4',
      collate: 'utf8mb4_0900_ai_ci',
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
    },
  );
};
