import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto, PhoneCheckDto, RegisterUserDto, VerifyOtpDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';

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

  @Get()
  findAll() {
    return this.userService.findAll();
  }


  @UseGuards(AuthGuard)
  @Patch()
  update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete("logout")
  remove(@Req() req: Request) {
    return this.userService.remove(req);
  }

  @Delete("remove-user/:id")
  removeUser(@Param("id") id: number) {
    return this.userService.removeUser(id);
  }
}
