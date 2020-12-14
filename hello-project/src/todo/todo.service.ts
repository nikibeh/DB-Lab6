import { Injectable } from '@nestjs/common';
import UserEntity from '../db/user.entity';
import CategoryEntity from '../db/category.entity';
import ItemEntity from '../db/item.entity';
import TagEntity from '../db/tag.entity';
import TaskEntity from '../db/task.entity';
import CreateTaskDto from './dto/create-task.dto';
import EditTaskDto from './dto/edit-task.dto';
import CreateCategoryDto from './dto/create-category.dto';
import CreateItemDto from './dto/create-item.dto';
import CreateTagDto from './dto/create-tag.dto';
import {getConnection} from "typeorm";

@Injectable()
export class TodoService {
    async insertItem(itemDetails: CreateItemDto): Promise<ItemEntity> {
        const itemEntity: ItemEntity = ItemEntity.create();
        itemEntity.content = itemDetails.content;
        itemEntity.task = await TaskEntity.findOne(itemDetails.taskID);
        await ItemEntity.save(itemEntity);
        return itemEntity;
    }

    async insertCategory(categoryDetails: CreateCategoryDto): Promise<CategoryEntity> {
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        categoryEntity.name = categoryDetails.name;
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
    }

    async insertTag(tagDetails: CreateTagDto): Promise<TagEntity> {
        const tagEntity: TagEntity = TagEntity.create();
        tagEntity.name = tagDetails.name;
        await TagEntity.save(tagEntity);
        return tagEntity;
    }

    async insertTask(taskDetails: CreateTaskDto): Promise<TaskEntity> {
        const taskEntity: TaskEntity = TaskEntity.create();
        taskEntity.user = await UserEntity.findOne(taskDetails.userID);
        taskEntity.category = await CategoryEntity.findOne(taskDetails.categoryID);
        taskEntity.items=[];
        for ( let i = 0; i < taskDetails.itemIDs.length ; i++)
        {
            const item = await ItemEntity.findOne(taskDetails.itemIDs[i]);
            taskEntity.items.push(item);
        }
        taskEntity.tags=[];
        for ( let i = 0; i < taskDetails.tagIDs.length ; i++)
        {
            const tag = await TagEntity.findOne(taskDetails.tagIDs[i]);
            taskEntity.tags.push(tag);
        }
        await TaskEntity.save(taskEntity);
        return taskEntity;
    }

    async editTask(taskDetails: EditTaskDto): Promise<TaskEntity> {
        const taskEntity = await TaskEntity.findOne(taskDetails.taskId);
        taskEntity.user = await UserEntity.findOne(taskDetails.userID);
        taskEntity.category = await CategoryEntity.findOne(taskDetails.categoryID);
        taskEntity.items=[];
        for ( let i = 0; i < taskDetails.itemIDs.length ; i++)
        {
            const item = await ItemEntity.findOne(taskDetails.itemIDs[i]);
            taskEntity.items.push(item);
        }
        taskEntity.tags=[];
        for ( let i = 0; i < taskDetails.tagIDs.length ; i++)
        {
            const tag = await TagEntity.findOne(taskDetails.tagIDs[i]);
            taskEntity.tags.push(tag);
        }
        await taskEntity.save();
        return taskEntity;
    }

    async deleteTask(taskID: number): Promise<TaskEntity> {
        const task = await TaskEntity.findOne(taskID);
        await task.remove();
        return task;
    }
}
