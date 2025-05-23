import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  Min,
  Max,
  ValidateNested,
} from 'class-validator';

export class ProductLevelDto {
    @ApiProperty({ example: 1 })
    @IsNumber()
    product: number;
  
    @ApiProperty({ example: 1 })
    @IsNumber()
    level: number;

    @ApiProperty({example: 1})
    @IsNumber()
    minWorkingHour: number

    @ApiProperty({example: 99})
    @IsNumber()
    priceHourly: number
  
    @ApiProperty({example: 999})
    @IsNumber()
    priceDaily: number
  
    @ApiProperty({example: 5})
    @IsNumber()
    experience: number
}

export class CreateMasterDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 1990 })
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  @IsString()
  @IsNotEmpty()
  image: string;

  @ApiProperty({ example: 'https://example.com/passport.jpg' })
  @IsString()
  @IsNotEmpty()
  passportImage: string;

  @ApiProperty({ example: 'Experienced worker in manufacturing.' })
  @IsString()
  @IsOptional()
  about: string;

  @ApiProperty({
    example: [
        { product: 1, level: 1, minWorkingHour: 1, priceHourly: 10, priceDaily: 100, experience: 5}, 
        { product: 2, level: 1, minWorkingHour: 2, priceHourly: 20, priceDaily: 200, experience: 10}
    ],
    type: [ProductLevelDto],
  })
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductLevelDto)
  master_products: ProductLevelDto[];

}
