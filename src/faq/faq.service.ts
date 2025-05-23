import { Injectable } from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FaqService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateFaqDto) {
    try {
      const one = await this.prisma.fAQ.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create faq error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.fAQ.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all faq error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.fAQ.findFirst({where:{id}})
      if(!one){
        return {message: `FAQ with ${id} id not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one faq error: ${error}`}
    }
  }

  async update(id: number, data: UpdateFaqDto) {
    try {
      const one = await this.prisma.fAQ.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update faq error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.fAQ.delete({where:{id}})
      return  one
    } catch (error) {
      console.log(error)
      return {message: `remove faq error: ${error}`}
    }
  }
}
