import { Injectable } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class BasketService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateBasketDto, req: Request) {
    try {
      const id = req["user-id"]
      const one = await this.prisma.basket.create({data: {
        productId: data.productId,
        productCount: data.productCount,
        toolId: data.toolId,
        userId: id,
        timeUnit: data.timeUnit,
        levelId: data.levelId
      }})

      return one
    } catch (error) {
      console.log(error)
      return {message: `create basket error: ${error}`}
    }
  }

  async findAll(
    limit: number,
    page: number,
  ) {
    try {
      const take = Number(limit);
      const skip = (Number(page) - 1) * take;
      const query: any = {};

      const one = await this.prisma.basket.findMany({
        where: query,
        skip,
        take
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all basket error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.basket.findFirst({where: {id}})
      if(!one){
        return {message: `Basket item not found with id ${id}`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one basket error: ${error}`}
    }
  }

  async update(id: number, data: UpdateBasketDto) {
    try {
      const one = await this.prisma.basket.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update basket error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.basket.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove basket error: ${error}`}
    }
  }
}
