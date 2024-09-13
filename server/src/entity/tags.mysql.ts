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

@Entity('tag')
export class Tag {
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  @Column('varchar', {
    comment: '标签名称',
  })
  name: string;

  @Column('int', {
    comment: '父级标签ID',
  })
  pid: number;

  // https://www.iconfont.cn/collections/detail?spm=a313x.search_index.0.da5a778a4.69173a81K1yz5L&cid=20399
  // https://www.iconfont.cn/collections/detail?spm=a313x.search_index.0.da5a778a4.69173a81K1yz5L&cid=10840
  @Column('varchar', {
    comment: '标签图标，只有一级标签才有',
    nullable: true,
  })
  icon: string;

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
