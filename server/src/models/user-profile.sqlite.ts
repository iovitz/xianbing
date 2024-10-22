import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_profile')
export class UserProfile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 10,
  })
  uid: string;

  @Column({
    type: 'varchar',
    length: 10,
  })
  nickname: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  avatar: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  state: number;

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date;
}
