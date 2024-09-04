import { DataTypes, Sequelize } from 'sequelize';
import { Entity } from './base.entity';

type ModelAttribute = {
  id: number;
  parentId: number;
  icon: string;
  rank: number;
  userId: string;
  state?: number;
};

export type MoneyTag = typeof Entity<ModelAttribute>;

export const useMoneyTagEntity = (sequelize: Sequelize): MoneyTag => {
  class MoneyTag extends Entity<ModelAttribute> {}
  MoneyTag.init(
    {
      id: {
        field: 'id',
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: '自增ID',
      },
      parentId: {
        field: 'parentId',
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        comment: '二级Tag对应的一级Tag的ID',
      },
      icon: {
        field: 'icon',
        type: DataTypes.STRING,
        allowNull: true,
        comment: '一级Tag对应的Icon',
      },
      rank: {
        field: 'rank',
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: true,
        comment: '二级Tag对应的一级Tag的ID',
      },
      userId: {
        field: 'userId',
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: '作者ID',
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
      tableName: 'tags',
      charset: 'utf8mb4',
      collate: 'utf8mb4_0900_ai_ci',
      updatedAt: 'updatedAt',
      createdAt: 'createdAt',
      deletedAt: 'deletedAt',
    }
  );
  return MoneyTag;
};
