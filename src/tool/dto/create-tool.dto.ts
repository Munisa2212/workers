import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  IsPositive,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateToolDto {
  @ApiProperty({ example: 'Tool' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Tool' })
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: 'Tool' })
  @IsString()
  @IsNotEmpty()
  nameEng: string;

  @ApiProperty({ example: 'yaxshi' })
  @IsString()
  @IsNotEmpty()
  descriptionUz: string;

  @ApiProperty({ example: 'good' })
  @IsString()
  @IsNotEmpty()
  descriptionRU: string;

  @ApiProperty({ example: 'good' })
  @IsString()
  @IsNotEmpty()
  descriptionEng: string;

  @ApiProperty({ example: 199 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(0)
  quantity: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsPositive()
  capacityId: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsPositive()
  sizeId: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  @IsPositive()
  brandId: number;
}

