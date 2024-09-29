import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Label } from './label';
import { UserProfile } from './user-profile';

export interface BillParams {
  id: number;
  type: boolean;
  money: number;
  labelId: number;
  userId: string;
  state: boolean;
  createAt: Date;
  updateAt: Date;
}

@Table({
  tableName: 'bill',
})
export class Bill extends Model implements BillParams {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: '自增主键',
  })
  id: number;

  @Column({
    type: DataType.BOOLEAN,
    comment: '类型(falsy:支出, truthy:收入)',
    allowNull: false,
  })
  type: boolean;

  @Column({
    type: DataType.FLOAT,
    comment: '金额',
    allowNull: false,
  })
  money: number;

  @ForeignKey(() => Label)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: '账单标签',
    allowNull: false,
  })
  labelId: number;

  @BelongsTo(() => Label)
  label: Label;

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
