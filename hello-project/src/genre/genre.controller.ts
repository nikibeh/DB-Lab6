import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';
import {ApiResponse,ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @ApiResponse({ status: 200, description: 'Create genre' })
  @Post('post')
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @ApiResponse({ status: 200, description: 'Get all genres' })
  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }
}