import { Injectable } from '@nestjs/common';
import { CreateGeneralinfoDto } from './dto/create-generalinfo.dto';
import { UpdateGeneralinfoDto } from './dto/update-generalinfo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneralinfoService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateGeneralinfoDto) {
    try {
      const one = await this.prisma.generalInfo.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create generalinfo error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.generalInfo.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all generalinfo error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.generalInfo.findFirst({where: {id}})
      if(!one){
        return {message: `General Info with ${id} id not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one generalinfo error: ${error}`}
    }
  }

  async update(id: number, data: UpdateGeneralinfoDto) {
    try {
      const one = await this.prisma.generalInfo.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update generalinfo error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.generalInfo.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove generalinfo error: ${error}`}
    }
  }
}
