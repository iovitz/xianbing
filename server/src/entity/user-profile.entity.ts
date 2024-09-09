import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user-profile')
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar')
  userId: string;

  @Column('varchar')
  sessionId: string;

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
}
