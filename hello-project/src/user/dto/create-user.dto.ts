import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateUserDto {
    @ApiProperty({description:'Enter the user\'s name ', minLength: 3, default: 'user', maxLength: 30})
    readonly name: string;
    @ApiProperty({description:'Enter the user\'s password ', minLength: 8, default: '12345678', maxLength: 50})
    readonly password: string;
    @ApiProperty({description:'Enter the taskIDs ', default: [1]})
    readonly taskIDs: number[];
  }