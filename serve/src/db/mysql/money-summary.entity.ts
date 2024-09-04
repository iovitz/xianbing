import { DataTypes, Sequelize } from 'sequelize';
import { Entity } from './base.entity';

type ModelAttribute = {
  id: number;
  money: number;
  state?: number;
};

export type MoneySummary = typeof Entity<ModelAttribute>;

export const useMoneySummaryEntity = (sequelize: Sequelize): MoneySummary => {
  class MoneySummary extends Entity<ModelAttribute> {}
  MoneySummary.init(
    {
      id: {
        field: 'id',
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      money: {
        field: 'money',
        type: DataTypes.INTEGER.UNSIGNED,
        unique: false,
        allowNull: false,
        comment: '金额',
      },
      state: {
        field: 'state',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: '状态',
      },
    },
    {
      sequelize,
      tableName: 'moneySummary',
      charset: 'utf8mb4',
      collate: 'utf8mb4_0900_ai_ci',
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
    }
  );
  return MoneySummary;
};
