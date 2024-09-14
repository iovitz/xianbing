import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Session } from './session';

@Table({
  tableName: 'user',
})
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING({
      length: 10,
    }),
    comment: '用户ID',
  })
  id: string;

  @Column({
    type: DataType.STRING({
      length: 30,
    }),
    comment: '三方登录平台类型',
    allowNull: true,
  })
  platform: string;

  @Column({
    type: DataType.STRING({
      length: 50,
    }),
    allowNull: true,
    comment: '三方平台ID',
  })
  platformId: string;

  @Column({
    type: DataType.STRING({
      length: 30,
    }),
    allowNull: false,
    comment: '邮箱',
  })
  email: string;

  @Column({
    type: DataType.STRING({
      length: 32,
    }),
    allowNull: false,
    comment: '密码',
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    comment: '可用状态',
    defaultValue: false,
  })
  state: boolean;

  @HasMany(() => Session)
  sessions: Session[];

  @UpdatedAt
  @Column({ field: 'update_at' }) // 自定义列名
  createAt: Date;

  @CreatedAt
  @Column({ field: 'create_at' }) // 自定义列名
  updateAt: Date;
}
