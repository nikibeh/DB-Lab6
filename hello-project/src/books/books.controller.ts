import { Body, Controller, Get, Post } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from './dto/create-book.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('books')
export default class GenreController {
  constructor(private readonly booksService: BooksService) {}
  @ApiResponse({ status: 200, description: 'Create book' })
  @Post('post')
  postGenre( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @ApiResponse({ status: 200, description: 'Get all books' })
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}