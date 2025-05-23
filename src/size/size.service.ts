import { Injectable } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { retryWhen } from 'rxjs';

@Injectable()
export class SizeService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateSizeDto) {
    try {
      const one = await this.prisma.size.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create size error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.size.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all size error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.size.findFirst({where: {id}})
      if(!one){
        return {message: `size with id ${id} not found`}
      }

      return one
    } catch (error) {
      console.log(error)
      return {message: `find one size error: ${error}`}
    }
  }

  async update(id: number, data: UpdateSizeDto) {
    try {
      const one = await this.prisma.size.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update size error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.size.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove size error: ${error}`}
    }
  }
}
