import { Module } from '@nestjs/common';
import { GeneralinfoService } from './generalinfo.service';
import { GeneralinfoController } from './generalinfo.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GeneralinfoController],
  providers: [GeneralinfoService, PrismaService],
})
export class GeneralinfoModule {}
