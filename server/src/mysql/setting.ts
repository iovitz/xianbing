import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'setting',
})
export class Setting extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: '自增主键',
  })
  id: number;

  @Column({
    type: DataType.STRING({
      length: 30,
    }),
    comment: '配置名称',
    allowNull: false,
  })
  key: string;

  @Column({
    type: DataType.STRING({
      length: 100,
    }),
    comment: '配置值',
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.BOOLEAN,
    comment: '可用状态',
    defaultValue: true,
  })
  state: boolean;

  @UpdatedAt
  @Column({
    field: 'update_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createAt: Date;

  @CreatedAt
  @Column({
    field: 'create_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updateAt: Date;
}
