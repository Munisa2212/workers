import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class MasterStarDto {
  @ApiProperty({ example: 5, description: 'Star rating from 1 to 5' })
  @IsNumber()
  @Min(1)
  @Max(5)
  star: number;

  @ApiProperty({ example: 12, description: 'ID of the master being rated' })
  @IsNumber()
  masterId: number;
}

export class CreateCommentDto {
  @ApiProperty({ example: 'Excellent work!', description: 'Comment text' })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiProperty({ example: 'order_abc123', description: 'ID of the order' })
  @IsNumber()
  @IsNotEmpty()
  orderId: number;

  @ApiProperty({ type: [MasterStarDto], description: 'List of master ratings' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MasterStarDto)
  master: MasterStarDto[];
}

