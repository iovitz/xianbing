import {
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
import { Label } from './label';
import { User } from './user';

@Table({
  tableName: 'user_profile',
})
export class UserProfile extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING({
      length: 10,
    }),
    comment: '用户ID',
  })
  id: string;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Label)
  label: Label[];

  @HasMany(() => Bill)
  bill: Bill[];

  @Column({
    type: DataType.STRING({
      length: 10,
    }),
    comment: '昵称',
  })
  nickname: string;

  @Column({
    type: DataType.STRING({
      length: 100,
    }),
    allowNull: true,
    comment: '头像URL',
  })
  avatar: string;

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
