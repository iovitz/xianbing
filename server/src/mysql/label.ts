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
import { UserProfile } from './user-profile';

@Table({
  tableName: 'label',
})
export class Label extends Model {
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
    defaultValue: false,
  })
  state: boolean;

  @UpdatedAt
  @Column({ field: 'update_at' })
  createAt: Date;

  @CreatedAt
  @Column({ field: 'create_at' }) // 自定义列名
  updateAt: Date;
}
