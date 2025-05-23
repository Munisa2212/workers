import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';
import { MasterDaily } from '@prisma/client';

export class CreateBasketDto {
  @ApiProperty({ example: 1, description: 'ID of the product (optional)' })
  @IsOptional()
  @IsInt()
  productId?: number;

  @ApiProperty({ example: 2, description: 'Quantity of the product/tool' })
  @IsNotEmpty()
  @IsInt()
  productCount: number;

  @ApiProperty({ example: 3, description: 'ID of the tool (optional)' })
  @IsOptional()
  @IsInt()
  toolId?: number;

  @ApiProperty({ example: 'DAY', enum: MasterDaily, description: 'Time unit (enum from MasterDaily)' })
  @IsNotEmpty()
  @IsEnum(MasterDaily)
  timeUnit: MasterDaily;

  @ApiProperty({ example: 1, description: 'ID of the level (required)' })
  @IsNotEmpty()
  @IsInt()
  levelId: number;
}
