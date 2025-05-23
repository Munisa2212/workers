import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, ValidateNested } from 'class-validator';

export class ProductDataDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  levelId: number;

  @ApiProperty({ example: 50 })
  @IsNumber()
  @Min(0)
  priceHourly: number;

  @ApiProperty({ example: 300 })
  @IsNumber()
  @Min(0)
  priceDaily: number;

  @ApiProperty({ example: 4 })
  @IsNumber()
  @Min(1)
  minWorkingHour: number;

  @ApiProperty({example: [1, 2]})
  @IsNotEmpty()
  tools: number[]
}

export class CreateProductDto {
    @ApiProperty({ example: 'nom' })
    @IsString()
    @IsNotEmpty()
    nameUz: string;
  
    @ApiProperty({ example: 'Название' })
    @IsString()
    @IsNotEmpty()
    nameRU: string;
  
    @ApiProperty({ example: 'Name' })
    @IsString()
    @IsNotEmpty()
    nameEng: string;
  
    @ApiProperty({ example: 'https://example.com/image.png' })
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({
        example: [
            { levelId: 1, minWorkingHour: 1, priceHourly: 10, priceDaily: 100, tools: [1,2]}, 
            { levelId: 1, minWorkingHour: 2, priceHourly: 20, priceDaily: 200, tools: [1,2]}
        ],
        type: [ProductDataDto],
    })
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => ProductDataDto)
    products_level: ProductDataDto[];
  }