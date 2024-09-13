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

@Entity('labels')
export class Label {
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  @Column('varchar', {
    comment: '标签名称',
  })
  name: string;

  @Column('varchar', {
    comment: '标签图标',
    nullable: true,
  })
  icon: string;

  @Column('int', {
    comment: '父级标签ID',
    default: 0,
  })
  pid: number;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
