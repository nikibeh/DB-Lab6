import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({description:'Enter the user\'s name ', minLength: 3, default: 'user', maxLength: 30})
    readonly name: string;
    @ApiProperty({description:'Enter the bookIDs ', default: [1]})
    readonly books: number[] ;
  }