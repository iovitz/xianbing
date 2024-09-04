import { DataTypes, Sequelize } from 'sequelize';
import { Entity } from './base.entity';

interface ModelAttribute {
  id: number;
  sessionId: string;
  userId: string;
  state?: number;
}

export type Session = typeof Entity<ModelAttribute>;
export default (sequelize: Sequelize): Session => {
  class Session extends Entity<ModelAttribute> {
    associate() {}
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
        comment: 'sessionID(UUID生成)',
      },
      userId: {
        field: 'userId',
        type: DataTypes.STRING(10),
        unique: true,
        allowNull: false,
        comment: '雪花ID',
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
    }
  );
  return Session;
};
