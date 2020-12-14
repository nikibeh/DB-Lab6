import { Body, Controller, Get, ParseIntPipe, Post, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import CreateTaskDto from './dto/create-task.dto';
import EditTaskDto from './dto/edit-task.dto';
import CreateCategoryDto from './dto/create-category.dto';
import CreateTagDto from './dto/create-tag.dto';
import CreateItemDto from './dto/create-item.dto';
import { AuthGuard } from '@nestjs/passport';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('item/post')
    @ApiResponse({ status: 201, description: 'Create item' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    postItem( @Body() item: CreateItemDto) {
        return this.todoService.insertItem(item);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('category/post')
    @ApiResponse({ status: 201, description: 'Create category' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    postCategory( @Body() category: CreateCategoryDto) {
        return this.todoService.insertCategory(category);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('tag/post')
    @ApiResponse({ status: 201, description: 'Create tag' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    postTag( @Body() tag: CreateTagDto) {
        return this.todoService.insertTag(tag);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('task/post')
    @ApiResponse({ status: 201, description: 'Create task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    postTask( @Body() task: CreateTaskDto) {
        return this.todoService.insertTask(task);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Delete('task/delete')
    @ApiResponse({ status: 200, description: 'Delete a specific task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    @ApiQuery({
        name: 'taskID',
        required: true,
        type: Number
    })
    deleteTask( @Query('taskID') taskID: number) {
        return this.todoService.deleteTask(taskID);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Put('task/put')
    @ApiResponse({ status: 200, description: 'Edit a specific task' })
    @ApiResponse({ status: 401, description: 'You should login first' })
    updateBook( @Body() task: EditTaskDto) {
        return this.todoService.editTask(task);
    }
}