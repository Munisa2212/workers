import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MasterController],
  providers: [MasterService, PrismaService],
})
export class MasterModule {}
