import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateCategoryDto {
  @ApiProperty({description:'Enter the category\'s name ', minLength: 3, default: 'category', maxLength: 30})
  readonly name: string;

  @ApiProperty({description:'Enter the taskIDs ', default: [1]})
  readonly taskIDs: number[];
  
}