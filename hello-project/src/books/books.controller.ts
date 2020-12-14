import { Body, Controller, Get, Post, Delete, Put, Query, UseGuards } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import EditBookDto from './dto/edit-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('books')
export default class GenreController {
  constructor(private readonly booksService: BooksService) {}
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 201, description: 'Create book' })
  @ApiResponse({ status: 401, description: 'You should login first' })
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'Get all books' })
  @ApiResponse({ status: 401, description: 'You should login first' })
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'Delete a specific book' })
  @ApiResponse({ status: 401, description: 'You should login first' })
  @Delete('delete')
  @ApiQuery({
    name: 'bookID',
    required: true,
    type: Number
  })
  deleteBook( @Query('bookID') bookID: number) {
    return this.booksService.deleteBook(bookID);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, description: 'Edit a specific book' })
  @ApiResponse({ status: 401, description: 'You should login first' })
  @Put('put')
  editBook( @Body() book: EditBookDto) {
    return this.booksService.edit(book);
  }

}