import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneralinfoService } from './generalinfo.service';
import { CreateGeneralinfoDto } from './dto/create-generalinfo.dto';
import { UpdateGeneralinfoDto } from './dto/update-generalinfo.dto';

@Controller('generalinfo')
export class GeneralinfoController {
  constructor(private readonly generalinfoService: GeneralinfoService) {}

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneralinfoDto: UpdateGeneralinfoDto) {
    return this.generalinfoService.update(+id, updateGeneralinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalinfoService.remove(+id);
  }
}
