import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCapacityDto {
  @ApiProperty({ example: '7L' })
  @IsString()
  @IsNotEmpty()
  nameUz: string;

  @ApiProperty({ example: '7L' })
  @IsString()
  @IsNotEmpty()
  nameRU: string;

  @ApiProperty({ example: '7L' })
  @IsString()
  @IsNotEmpty()
  nameEng: string;
}
