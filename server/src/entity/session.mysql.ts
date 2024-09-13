import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.mysql';

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  @Column('varchar', {
    comment: 'SessionID',
  })
  sessionId: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @ManyToOne(() => User, user => user.sessions)
  @JoinColumn({ name: 'userId' })
  user: User;
}
