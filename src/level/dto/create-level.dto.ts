import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLevelDto {
  @ApiProperty({ example: 'Boshlang‘ich'})
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Начальный'})
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: 'Beginner'})
  @IsString()
  @IsNotEmpty()
  nameEng: string;
}

