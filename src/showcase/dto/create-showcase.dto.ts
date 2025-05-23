import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateShowcaseDto {
  @ApiProperty({ example: 'Chegirma' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Скидка' })
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: 'Discount' })
  @IsString()
  @IsNotEmpty()
  nameEng: string;

  @ApiProperty({ example: 'Tavsif' })
  @IsString()
  @IsNotEmpty()
  descriptionUz: string;

  @ApiProperty({ example: 'Описание' })
  @IsString()
  @IsNotEmpty()
  descriptionRU: string;

  @ApiProperty({ example: 'Description' })
  @IsString()
  @IsNotEmpty()
  descriptionEng: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: 'https://example.com/link' })
  @IsString()
  @IsNotEmpty()
  link: string;
}
