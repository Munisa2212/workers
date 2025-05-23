import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) {}

  @Post()
  create(@Body() createCapacityDto: CreateCapacityDto) {
    return this.capacityService.create(createCapacityDto);
  }

  @Get()
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  findAll(
    @Query('name') name: string,
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
  ) {
    return this.capacityService.findAll(name, limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capacityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapacityDto: UpdateCapacityDto) {
    return this.capacityService.update(+id, updateCapacityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capacityService.remove(+id);
  }
}
