import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { MasterService } from './master.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/user/decorators/rbuc.decorators';
import { userRole } from '@prisma/client';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('master')
export class MasterController {
  constructor(private readonly masterService: MasterService) {}

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.masterService.create(createMasterDto);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Get()
  @ApiQuery({ name: 'fullName', required: false, type: String })
  @ApiQuery({ name: 'phone', required: false, type: String })
  @ApiQuery({ name: 'year', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  findAll(
    @Query('fullName') fullName: string,
    @Query('phone') phone: string,
    @Query('year') year: number,
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
  ) {
    return this.masterService.findAll(fullName, phone, year, limit, page);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterService.findOne(+id);
  }

  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.masterService.update(+id, updateMasterDto);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterService.remove(+id);
  }

  @UseGuards(AuthGuard)
  @Get(':masterId/orders')
  getOrdersForMaster(@Param('masterId', ParseIntPipe) masterId: number) {
    return this.masterService.getOrdersForMaster(masterId);
  }
}
