import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/user/decorators/rbuc.decorators';
import { userRole } from '@prisma/client';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  // @Roles(userRole.ADMIN)
  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
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
    return this.regionService.findAll(name, limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }

  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
