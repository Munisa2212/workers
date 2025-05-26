import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/user/decorators/rbuc.decorators';
import { userRole } from '@prisma/client';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
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
    return this.brandService.findAll(name, limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
