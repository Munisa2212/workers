import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BrandService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateBrandDto) {
    try {
      const one = await this.prisma.brand.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create brand error: ${error}`}
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

      const one = await this.prisma.brand.findMany({
        where: query,
        skip,
        take,
        include: {
          Tools: {
            select: {
              nameUz: true,
              descriptionUz: true
            }
          }
        }
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all brand error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.brand.findFirst({where: {id}})
      if(!one){
        return {message: `Brand with id ${id} not found`}
      }

      return one
    } catch (error) {
      console.log(error)
      return {message: `find one brand error: ${error}`}
    }
  }

  async update(id: number, data: UpdateBrandDto) {
    try {
      const one = await this.prisma.brand.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update brand error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.brand.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove brand error: ${error}`}
    }
  }
}
