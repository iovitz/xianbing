import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Session } from './session.entity';
import { UserProfile } from './user-profile.entity';

@Entity('user')
export class User {
  @PrimaryColumn('varchar', {
    length: 10,
    comment: '雪花ID',
  })
  id: string;

  @Column('varchar', {
    length: 20,
    comment: '三方登录平台类型',
    nullable: true,
  })
  platform: string;

  @Column('varchar', {
    length: 50,
    comment: '三方平台ID',
    nullable: true,
  })
  platformId: string;

  @Column('varchar', {
    length: 50,
    comment: '邮箱',
  })
  email: string;

  @Column('varchar', {
    length: 32,
    comment: 'md5加密的密码',
  })
  password: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @OneToOne(() => UserProfile)
  profile: UserProfile;

  @OneToMany(() => Session, session => session.user)
  sessions: Session[];
}
