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
import { User } from './user';

@Table({
  tableName: 'session',
})
export class Session extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    comment: '主键自增ID',
  })
  id: number;

  @Column({
    type: DataType.STRING({
      length: 36,
    }),
    comment: 'SessionID',
    allowNull: false,
  })
  sessionId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING({
      length: 10,
    }),
    comment: '登录的UserID',
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  team: User;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '浏览器',
    allowNull: true,
  })
  browser?: string;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '浏览器版本',
    allowNull: true,
  })
  browserVersion?: string;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '浏览器内核版本',
    allowNull: true,
  })
  engine?: string;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '的设备名称',
    allowNull: true,
  })
  os?: string;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '设备版本',
    allowNull: true,
  })
  osVersion?: string;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '设备品牌',
    allowNull: true,
  })
  deviceVendor?: string;

  @Column({
    type: DataType.STRING({
      length: 20,
    }),
    comment: '设备型号',
    allowNull: true,
  })
  deviceModel?: string;

  @Column({
    type: DataType.STRING({
      length: 200,
    }),
    comment: '原始useragent',
    allowNull: true,
  })
  useragent?: string;

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
  @Column({ field: 'create_at' })
  updateAt: Date;
}
