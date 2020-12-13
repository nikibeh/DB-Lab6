import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class EditBookDto {
  @ApiProperty({description:'Enter the bookID ', default: 1})
  readonly bookID: number;

  @ApiProperty({description:'Enter the book\'s name ', minLength: 3, default: 'book', maxLength: 30})
  readonly name: string;

  @ApiProperty({description:'Enter the userID ', default: 1})
  readonly userID: number;

  @ApiProperty({description:'Enter the genreIDs ', default: [1]})
  readonly genreIDs: number[];
} 