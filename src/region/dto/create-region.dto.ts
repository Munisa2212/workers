import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: 'Toshkent' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Ташкент' })
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: 'Tashkent' })
  @IsString()
  @IsNotEmpty()
  nameEng: string;
}
