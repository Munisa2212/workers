import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSizeDto {
      @ApiProperty({ example: 'xl' })
      @IsString()
      @IsNotEmpty()
      nameUz: string;
    
      @ApiProperty({ example: 'xl' })
      @IsString()
      @IsNotEmpty()
      nameRU: string;
    
      @ApiProperty({ example: 'xl' })
      @IsString()
      @IsNotEmpty()
      nameEng: string;
}
