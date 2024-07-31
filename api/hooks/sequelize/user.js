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
        comment: '雪花ID',
      },
      nickname: {
        field: 'nickname',
        type: DataTypes.STRING(10),
        comment: '用户昵称',
      },
      avatar: {
        field: 'avatar',
        type: DataTypes.STRING(100),
        comment: '头像URL',
      },
      email: {
        field: 'email',
        type: DataTypes.STRING(30),
        comment: '用户邮箱',
      },
      password: {
        field: 'password',
        type: DataTypes.STRING(60),
        comment: 'Bcrypt加密的密码',
      },
      // 粉丝数
      fansNumber: {
        field: 'fansNumber',
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: '粉丝数',
      },
      // 粉丝数
      voiceNumber: {
        field: 'voiceNumber',
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0,
        comment: '发布的声音数量',
      },
      state: {
        field: 'state',
        type: DataTypes.BOOLEAN,
        comment: '状态',
      },
    },
    {
      tableName: 'user',
      sequelize,
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
    },
  );
};
