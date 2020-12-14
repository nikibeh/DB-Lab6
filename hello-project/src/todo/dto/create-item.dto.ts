import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateItemDto {
  @ApiProperty({description:'Enter the item\'s content ', minLength: 1, default: 'content', maxLength: 100})
  readonly content: string;

  @ApiProperty({description:'Enter the taskID ', default: 1})
  readonly taskID: number;
} 