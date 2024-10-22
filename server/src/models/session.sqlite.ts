import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 36,
  })
  sessionId: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  userId: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  useragent?: string;

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date;
}
