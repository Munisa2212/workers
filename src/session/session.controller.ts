import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Request } from 'express';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() req: Request) {
    return this.sessionService.findAll(req);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.sessionService.remove(+id, req);
  }
}
