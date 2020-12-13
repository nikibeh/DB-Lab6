import { Body, Controller, Get, Post, Delete, Put, Query } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import EditBookDto from './dto/edit-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('books')
export default class GenreController {
  constructor(private readonly booksService: BooksService) {}
  @ApiResponse({ status: 200, description: 'Create book' })
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @ApiResponse({ status: 200, description: 'Get all books' })
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
  @ApiResponse({ status: 200, description: 'Delete a specific book' })
  @Delete('delete')
  @ApiQuery({
    name: 'bookID',
    required: true,
    type: Number
  })
  deleteBook( @Query('bookID') bookID: number) {
    return this.booksService.deleteBook(bookID);
  }
  @ApiResponse({ status: 200, description: 'Edit a specific book' })
  @Put('put')
  editBook( @Body() book: EditBookDto) {
    return this.booksService.edit(book);
  }

}