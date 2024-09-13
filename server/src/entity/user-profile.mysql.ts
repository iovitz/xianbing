import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.mysql';

@Entity('user_profile')
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  nickname: string;

  @Column('varchar')
  avatar: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @OneToOne(() => User, user => user.profile)
  @JoinColumn({ name: 'userId' })
  user: User;
}
