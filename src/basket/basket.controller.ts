import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Request } from 'express';
import { ApiQuery } from '@nestjs/swagger';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBasketDto: CreateBasketDto, @Req() req: Request) {
    return this.basketService.create(createBasketDto, req);
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  findAll(
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
    @Req() req: Request
  ) {
    return this.basketService.findAll(limit, page, req);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.basketService.update(+id, updateBasketDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}
