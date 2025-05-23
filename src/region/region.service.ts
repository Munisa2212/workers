import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegionService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateRegionDto) {
    try {
      const one = await this.prisma.region.create({data: {
        nameUz: data.nameUz,
        nameRU: data.nameRU,
        nameEng: data.nameEng
      }})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create region error: ${error}`}
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

      const one = await this.prisma.region.findMany({
        where: query,
        skip,
        take,
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all region error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.region.findFirst({where: {id}})
      if(!one){
        return {message: `Region with id ${id} not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one region error: ${error}`}
    }
  }

  async update(id: number, data: UpdateRegionDto) {
    try {
      const one = await this.prisma.region.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update region error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.region.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove region error: ${error}`}
    }
  }
}
