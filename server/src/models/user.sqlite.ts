import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 10,
  })
  userId: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 32,
  })
  password: 'string';

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date;
}
