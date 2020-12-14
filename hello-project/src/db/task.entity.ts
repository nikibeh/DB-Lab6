import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';
import CategoryEntity from './category.entity';
import TagEntity from './tag.entity';
import ItemEntity from './item.entity';

@Entity()
export default class TaskEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  content: string;

  // n:1 relation with users
  @ManyToOne(type => UserEntity, user => user.tasks)
  user: UserEntity;

  // n:1 relation with categories
  @ManyToOne(type => CategoryEntity, category => category.tasks)
  category: CategoryEntity;

  @OneToMany( type => TagEntity , tag => tag.task)
  tags: TagEntity[];

  @OneToMany( type => ItemEntity , item => item.task)
  items: ItemEntity[];

}
