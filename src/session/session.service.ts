import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class SessionService {

  constructor(private readonly prisma: PrismaService){}

  async findAll(req: Request) {
    try {
      const id = req["user-id"]
      const one = await this.prisma.session.findMany({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all session error: ${error}`}
    }
  }

  async remove(id: number, req: Request) {
    try {
      const id = req["user-id"]
      const one = await this.prisma.session.findFirst({where: {id}})
      if(one?.userId !== id){
        return {message: `You cannot change others' session`}
      }
      const deleted = await this.prisma.session.delete({where: {id}})
      return deleted
    } catch (error) {
      console.log(error)
      return {message: `remove session error: ${error}`}
    }
  }
}
