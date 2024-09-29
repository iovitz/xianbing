import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Bill } from './bill';
import { UserProfile } from './user-profile';

@Table({
  tableName: 'label',
})
export class Label extends Model {
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
    comment: '标签名',
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING({
      length: 50,
    }),
    comment: '图标',
    allowNull: true,
  })
  icon: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: '父标签ID',
    defaultValue: 0,
  })
  pid: number;

  @Column({
    type: DataType.BOOLEAN,
    comment: '类型(falsy:支出, truthy:收入)',
    allowNull: false,
  })
  type: boolean;

  @ForeignKey(() => UserProfile)
  @Column({
    type: DataType.STRING({
      length: 10,
    }),
    comment: '自定义标签所属于的用户ID',
    allowNull: true,
  })
  userId: string;

  @BelongsTo(() => UserProfile)
  user: UserProfile;

  @HasMany(() => Bill)
  bill: Bill;

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
