import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GeneralinfoService } from './generalinfo.service';
import { CreateGeneralinfoDto } from './dto/create-generalinfo.dto';
import { UpdateGeneralinfoDto } from './dto/update-generalinfo.dto';
import { Roles } from 'src/user/decorators/rbuc.decorators';
import { userRole } from '@prisma/client';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('generalinfo')
export class GeneralinfoController {
  constructor(private readonly generalinfoService: GeneralinfoService) {}

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createGeneralinfoDto: CreateGeneralinfoDto) {
    return this.generalinfoService.create(createGeneralinfoDto);
  }

  @Get()
  findAll() {
    return this.generalinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalinfoService.findOne(+id);
  }

  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneralinfoDto: UpdateGeneralinfoDto) {
    return this.generalinfoService.update(+id, updateGeneralinfoDto);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalinfoService.remove(+id);
  }
}
