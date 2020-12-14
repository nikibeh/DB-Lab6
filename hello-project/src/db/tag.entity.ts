import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class TagEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  
}