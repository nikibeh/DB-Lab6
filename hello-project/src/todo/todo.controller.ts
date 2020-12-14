import { Body, Controller, Get, ParseIntPipe, Post, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import CreateTaskDto from './dto/create-task.dto';
import EditTaskDto from './dto/edit-task.dto';
import CreateCategoryDto from './dto/create-category.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateItemDto from './dto/create-item.dto';
import { AuthGuard } from '@nestjs/passport';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    @Post('item/post')
    @ApiResponse({ status: 201, description: 'Create item' })
    postItem( @Body() item: CreateItemDto) {
        return this.todoService.insertItem(item);
    }

    @Post('category/post')
    @ApiResponse({ status: 201, description: 'Create category' })
    postCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.insertCategory(category);
    }

    @Post('tag/post')
    @ApiResponse({ status: 201, description: 'Create tag' })
    postTag( @Body() tag: CreateTagDto) {
        return this.todoService.insertTag(tag);
    }

    @Post('task/post')
    @ApiResponse({ status: 201, description: 'Create task' })
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.insertTask(task);
    }

    @Delete('task/delete')
    @ApiResponse({ status: 200, description: 'Delete a specific task' })
    @ApiQuery({
        name: 'taskID',
        required: true,
        type: Number
    })
    deleteTask( @Query('taskID') taskID: number) {
        return this.todoService.deleteTask(taskID);
    }

    @Put('task/put')
    @ApiResponse({ status: 200, description: 'Edit a specific task' })
    updateBook( @Body() task: EditTaskDto) {
        return this.todoService.editTask(task);
    }
}