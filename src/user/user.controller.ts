import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto, PhoneCheckDto, RegisterUserDto, VerifyOtpDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from './decorators/rbuc.decorators';
import { userRole } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("register")
  register(@Body() createUserDto: RegisterUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post("check")
  check(@Body() createUserDto: PhoneCheckDto) {
    return this.userService.check(createUserDto);
  }

  @Post("verify")
  verify(@Body() createUserDto: VerifyOtpDto) {
    return this.userService.verify(createUserDto);
  }

  @Post("login")
  login(@Body() createUserDto: LoginUserDto, @Req() req: Request) {
    return this.userService.login(createUserDto, req);
  }

  @Post("resent-otp")
  resend(@Body() createUserDto: PhoneCheckDto) {
    return this.userService.resend(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get("me")
  me(@Req() req: Request) {
    return this.userService.me(req);
  }

  @Roles(userRole.ADMIN)
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }


  @Roles(userRole.ADMIN, userRole.SUPER_ADMIN)
  @UseGuards(AuthGuard)
  @Patch()
  update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req, updateUserDto);
  }

}
