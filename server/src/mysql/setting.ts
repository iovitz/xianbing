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
    comment: '主键自增ID',
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
    defaultValue: false,
  })
  state: boolean;

  @UpdatedAt
  @Column({ field: 'update_at' }) // 自定义列名
  createAt: Date;

  @CreatedAt
  @Column({ field: 'create_at' }) // 自定义列名
  updateAt: Date;
}
