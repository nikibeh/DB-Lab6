import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTaskDto {
  @ApiProperty({description:'Enter the userID ', default: 1 })
  readonly userID: number;

  @ApiProperty({description:'Enter the itemIDs ', default: [1]})
  readonly itemIDs: number[];

  @ApiProperty({description:'Enter the categoryID ', default: 1})
  readonly categoryID: number;

  @ApiPropertyOptional({description:'Enter the tagIDs ', default: [1]})
  readonly tagIDs: number[];

} 