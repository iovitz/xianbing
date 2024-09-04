import { DataTypes, Sequelize } from 'sequelize';
import { Entity } from './base.entity';

interface ModelAttribute {
  idx: number;
  id: string;
  platform?: string;
  platformId?: string;
  email: string;
  password: string;
  state?: number;
}

type UserModel = typeof Entity<ModelAttribute>;

export interface User extends UserModel {}

const useUserModel = (sequelize: Sequelize): User => {
  class User extends Entity<ModelAttribute> {}
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
      platform: {
        field: 'platform',
        type: DataTypes.STRING(10),
        allowNull: true,
        comment: '三方登录平台类型',
      },
      platformId: {
        field: 'platformId',
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: true,
        comment: '三方平台ID',
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
    }
  );
  return User;
};
export default useUserModel;
