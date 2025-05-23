import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LevelController],
  providers: [LevelService, PrismaService],
})
export class LevelModule {}
