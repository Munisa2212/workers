import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateLevelDto) {
    try {
      const existLevel = await this.prisma.level.findFirst({where: {
        nameUz: data.nameUz,
        nameRU: data.nameRU,
        nameEng: data.nameEng
      }})
      if(existLevel){
        return {message: `This level already exists`}
      }

      const one = await this.prisma.level.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create level error: ${error}`}
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
        query.nameUz = name;
      }
      const one = await this.prisma.level.findMany({
        where: query,
        skip,
        take
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all level error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.level.findFirst({where: {id}})
      if(!one){
        return {message: `Level with id ${id} not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one level error: ${error}`}
    }
  }

  async update(id: number, data: UpdateLevelDto) {
    try {
      const one = await this.prisma.level.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update level error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.level.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove level error: ${error}`}
    }
  }
}
