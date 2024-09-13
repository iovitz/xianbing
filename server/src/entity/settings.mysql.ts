import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('setting')
export class Setting {
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  @Column('varchar', {
    comment: '配置名称',
  })
  key: string;

  @Column('varchar', {
    comment: '配置值',
  })
  value: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt: Date;
}
