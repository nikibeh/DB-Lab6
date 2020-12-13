import { Body, Controller, Get, Post } from '@nestjs/common';
import BooksService from './books.service';
import CreateGenreDto from './dto/create-book.dto';

@Controller('genre')
export default class GenreController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.booksService.insert(genre);
  }
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
}