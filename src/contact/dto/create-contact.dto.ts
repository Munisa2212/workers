import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  surName: string;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '123 Example Street, Tashkent' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'I would like to inquire about your services.' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
