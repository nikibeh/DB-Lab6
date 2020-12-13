import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateGenreDto {
    @ApiProperty({description:'Enter the genre\'s type ', minLength: 3, default: 'genre', maxLength: 30})
    readonly type: string;
  }