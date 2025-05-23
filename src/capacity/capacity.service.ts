import { Injectable } from '@nestjs/common';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapacityService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateCapacityDto) {
    try {
      const one = await this.prisma.capacity.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create capacity error: ${error}`}
    }
  }

  async findAll(
    name: string,
    limit: number,
    page: number,
  ) {
    try {
      const take = Number(limit);
      const skip = (Number(page) - 1) * take;
      const query: any = {};

      if (name) {
        query.name = name;
      }

      const one = await this.prisma.capacity.findMany({
        where: query,
        skip,
        take,
        
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all capacity error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.capacity.findFirst({where: {id}})
      if(!one){
        return {message: `Capacity with id ${id} not found`}
      }

      return one
    } catch (error) {
      console.log(error)
      return {message: `find one capacity error: ${error}`}
    }
  }

  async update(id: number, data: UpdateCapacityDto) {
    try {
      const one = await this.prisma.capacity.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update capacity error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.capacity.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove capacity error: ${error}`}
    }
  }
}
