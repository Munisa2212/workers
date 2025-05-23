import { Module } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CapacityController } from './capacity.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CapacityController],
  providers: [CapacityService, PrismaService],
})
export class CapacityModule {}
