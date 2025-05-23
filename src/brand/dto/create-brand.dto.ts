import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {
  @ApiProperty({ example: 'Nike' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: 'Nike' })
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: 'Nike' })
  @IsString()
  @IsNotEmpty()
  nameEng: string;
}

