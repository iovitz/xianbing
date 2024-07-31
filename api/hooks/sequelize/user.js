const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
  }
  User.init(
    {
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
      nickname: {
        field: 'nickname',
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      avatar: {
        field: 'avatar',
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      username: {
        field: 'username',
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        field: 'password',
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      // 粉丝数
      fansNumber: {
        field: 'fans_number',
        type: DataTypes.INTEGER,
      },
      // 粉丝数
      voiceNumber: {
        field: 'voice_number',
        type: DataTypes.INTEGER,
      },
      state: {
        field: 'state',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'user',
      sequelize,
    },
  );
};