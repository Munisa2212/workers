import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { SmsModule } from 'src/sms/sms.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [SmsModule, JwtModule.register({
    global: true,
    secret: "Nisa",
    signOptions: { expiresIn: '60d' },
  })],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
