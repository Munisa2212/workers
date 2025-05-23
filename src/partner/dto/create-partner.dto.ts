import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty({ example: 'Hamkor' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'партнёр' })
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: 'Partner' })
  @IsString()
  @IsNotEmpty()
  nameEng: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  @IsString()
  @IsNotEmpty()
  image: string;
}
