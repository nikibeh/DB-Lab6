import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTagDto {
  @ApiProperty({description:'Enter the tag\'s name ', minLength: 3, default: 'tag', maxLength: 20})
  readonly name: string;

}