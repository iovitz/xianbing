const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
  }
  User.init(
    {
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
      nickname: {
        field: 'nickname',
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: '用户昵称',
      },
      avatar: {
        field: 'avatar',
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: '头像URL',
      },
      email: {
        field: 'email',
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: '用户邮箱',
      },
      password: {
        field: 'password',
        type: DataTypes.STRING(60),
        allowNull: false,
        comment: 'Bcrypt加密的密码',
      },
      // 粉丝数
      fansNumber: {
        field: 'fansNumber',
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '粉丝数',
      },
      // 粉丝数
      voiceNumber: {
        field: 'voiceNumber',
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '发布的声音数量',
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
      tableName: 'user',
      charset: 'utf8mb4',
      collate: 'utf8mb4_0900_ai_ci',
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
    },
  );
};
