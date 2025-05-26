import { MasterDaily, paymentType } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export class OrderProductsDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  productId: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  levelId: number;

  @ApiProperty({example: 1})
  @IsNumber()
  count: number

}

export class OrderToolsDto {
  @ApiProperty({ example: 5 })
  @IsNumber()
  toolId: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  count: number;
}

export class CreateOrderDto {
  @ApiProperty({ type: [OrderProductsDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderProductsDto)
  products: OrderProductsDto[];

  @ApiProperty({ type: [OrderToolsDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderToolsDto)
  tools: OrderToolsDto[];

  @ApiProperty({ example: 8 })
  @IsNumber()
  @IsNotEmpty()
  workingTime: number;

  @ApiProperty({ enum: MasterDaily })
  @IsEnum(MasterDaily)
  timeUnit: MasterDaily;

  @ApiProperty({ example: "Tashkent" })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: "12 Example Street, Apt 34" })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ enum: paymentType })
  @IsEnum(paymentType)
  paymentType: paymentType;

  @ApiProperty({ example: true })
  @IsBoolean()
  withDelivery: boolean;
}



export class AssignMastersToOrderDto {
  @ApiProperty({example: 1})
  @IsInt()
  orderId: number;

  @ApiProperty({example: [1,2]})
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  masterIds: number[];
}

