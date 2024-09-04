import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('varchar')
  userId: string;

  @Column('varchar')
  sessionId: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;
}
