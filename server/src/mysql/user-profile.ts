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
