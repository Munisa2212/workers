import { Injectable } from '@nestjs/common';
import { CreateShowcaseDto } from './dto/create-showcase.dto';
import { UpdateShowcaseDto } from './dto/update-showcase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShowcaseService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateShowcaseDto) {
    try {
      const one = await this.prisma.showCase.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create showcase error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.showCase.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all showcase error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.showCase.findFirst({where: {id}})
      if(!one){
        return {message: `Showcase with ${id} id not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one showcase error: ${error}`}
    }
  }

  async update(id: number, data: UpdateShowcaseDto) {
    try {
      const one = await this.prisma.showCase.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update showcase error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.showCase.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove showcase error: ${error}`}
    }
  }
}
