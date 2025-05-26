import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ToolService } from './tool.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/user/decorators/rbuc.decorators';
import { userRole } from '@prisma/client';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('tool')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto);
  }


  @Get()
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiQuery({ name: 'price', required: false, type: Number })
  @ApiQuery({ name: 'isActive', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  findAll(
    @Query('name') name: string,
    @Query('price') price: number,
    @Query('isActive') isActive: boolean,
    @Query('limit') limit: number = 10,
    @Query('page') page: number = 1,
  ) {
    return this.toolService.findAll(name, price, isActive, limit, page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolService.findOne(+id);
  }

  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolService.update(+id, updateToolDto);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toolService.remove(+id);
  }
}
