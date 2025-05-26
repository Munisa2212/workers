import { Injectable } from '@nestjs/common';
import { LoginUserDto, PhoneCheckDto, RegisterUserDto, VerifyOtpDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
import {totp} from "otplib"
import { SmsService } from 'src/sms/sms.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';
totp.options = {step: 200000}

@Injectable()
export class UserService {

  constructor(
    private readonly prisma: PrismaService, 
    private readonly SMS: SmsService,
    private jwtService: JwtService,
    private readonly mailer: MailService
  ){}

  async findUser(phoneNumber: string){
    const user = await this.prisma.user.findFirst({where: {phoneNumber}})
    return user
  }

  async register(data: RegisterUserDto) {
    try {
      const user = await this.findUser(data.phoneNumber)
      if(user){
        return {message: "You already registered. Please log in"}
      }
      const region = await this.prisma.region.findFirst({where: {id: data.regionId}})
      if(!region){
        return {message: "You choose region that is not exists"}
      }
      const userEmail = await this.prisma.user.findFirst({where: {email: data.email}})
      if(userEmail){
        return {message: `You have already account`}
      }

      const hash = bcrypt.hashSync(data.password, 10)
      const one = await this.prisma.user.create({
        data: {
          fullName: data.fullName,
          password: hash,
          phoneNumber: data.phoneNumber,
          regionId: data.regionId,
          IIN: data.IIN,
          MFO: data.MFO,
          RS: data.RS,
          Bank: data.Bank,
          OKED: data.OKED,
          ADDRESS: data.ADDRESS,
          role: data.role,
          status: "PASSIVE",
          email: data.email
        }
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `user create error: ${error}`}
    }
  }

  async check(data: PhoneCheckDto){
    try {
      const user = await this.findUser(data.phoneNumber)
      if(!user){
        return {message: "You have to register first. Please register"}
      }

      const userEmail = await this.prisma.user.findFirst({where: {email: data.email}})
      if(!user){
        return {message: "You have to register first. Please register"}
      }
      
      let otp = totp.generate(data.phoneNumber + "phone")
      console.log(otp, "this is your otp")
      await this.SMS.sendSMS(data.phoneNumber, "Bu Eskiz dan Test")
      await this.mailer.sendMail(data.email, "One Time Password", otp)
      return {message: "Your One Time Password is sended."}
    } catch (error) {
      console.log(error)
      return {message: `user otp check error: ${error}`}
    }
  }

  async verify(data: VerifyOtpDto){
    try {
      const user = await this.findUser(data.phoneNumber)
      if(!user){
        return {message: "You have to register first. Please register"}
      }

      const userEmail = await this.prisma.user.findFirst({where: {email: data.email}})
      if(!user){
        return {message: "You have to register first. Please register"}
      }
      

      let match = totp.verify({token: data.otp, secret: data.phoneNumber + "phone"})
      if(!match){
        return {message: "Your One Time Password is invalid. Please try again"}
      }
      
      await this.prisma.user.update({
        where: {phoneNumber: data.phoneNumber}, 
        data: {status: "ACTIVE"}
      })

      return {message: "You successfully registered. Now you can log in"}
    } catch (error) {
      console.log(error)
      return {message: `verify error: ${error}`}
    }
  }

  async login(data: LoginUserDto, req: Request){
    try {
      const user = await this.findUser(data.phoneNumber)
      if(!user){
        return {message: "You have to register first. Please register"}
      }

      const userEmail = await this.prisma.user.findFirst({where: {email: data.email}})
      if(!user){
        return {message: "You have to register first. Please register"}
      }

      if(user.status === "PASSIVE"){
        return {message: "You have to register first. Please register"}
      }

      await this.prisma.session.create({
        data: {
          userId: user.id,
          ipAddress: req.ip || 'Unknown ip',
          device: req.headers["user-agent"] || "unknown device"
        }
      })

      const match = bcrypt.compareSync(data.password, user.password)
      if(!match){
        return {message: "Your password is wrong. Please try again"}
      }

      const jwt = this.jwtService.sign({id: user.id, role: user.role})
      return {jwt}
    } catch (error) {
      console.log(error)
      return {message: `login error: ${error}`}
    }
  }

  async resend(data: PhoneCheckDto){
    try {
      const user = await this.findUser(data.phoneNumber)
      if(!user){
        return {message: "You have to register first. Please register"}
      }

      let otp = totp.generate(data.phoneNumber + "phone")
      console.log(otp, "your one time password")
      await this.SMS.sendSMS(data.phoneNumber, "Bu Eskiz dan Test")
      await this.mailer.sendMail(data.email, "One Time Password", otp)
      return {message: "Your One Time Password is sended"}
    } catch (error) {
      console.log(error)
      return {message: `resend one time password error: ${error}`}
    }
  }

  async me(req: Request){
    try {
      let id = req["user-id"]
      const user = await this.prisma.user.findFirst({where: {id}})
      return user
    } catch (error) {
      console.log(error)
      return {message: `me error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.user.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all users error: ${error}`}
    }
  }

  async update(req: Request, data: UpdateUserDto) {
    try {
      let id = req["user-id"]
      const one = await this.prisma.user.update({
        where: {id},
        data
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `update user error: ${error}`}
    }
  }

}
