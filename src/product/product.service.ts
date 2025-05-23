import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateProductDto) {
    try {
      const existProduct = await this.prisma.product.findFirst({where: {
        nameUz: data.nameUz,
        nameRU: data.nameRU,
        nameEng: data.nameEng,
      }})
      if(existProduct){
        return {message: "This product already exists"}
      }

      const one = await this.prisma.product.create({data: {
        nameUz: data.nameUz,
        nameRU: data.nameRU,
        nameEng: data.nameEng,
        image: data.image
      }})

      for (const element of data.products_level){
        const level = await this.prisma.level.findUnique({
          where: { id: element.levelId },
        });
      
        if (!level) {
          return {message: `Level with ID ${element.levelId} does not exist`}
        }

        await this.prisma.productLevels.create({data: {
          levelId: element.levelId,
          productId: one.id,
          priceDaily: element.priceDaily,
          priceHourly: element.priceHourly,
          minWorkingHour: element.minWorkingHour
        }})

        for (const a of element.tools){
          const tool = await this.prisma.tools.findUnique({
            where: { id: a },
          });
        
          if (!tool) {
            return {message: `Tool with ID ${a} does not exist`}
          }

          await this.prisma.productTools.create({data: {
            toolId: a,
            productId: one.id
          }})
        }
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `create product error: ${error}`}
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

      const one = await this.prisma.product.findMany({
        where: query,
        skip,
        take,
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all product error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.product.findFirst({where: {id}})
      if(!one){
        return {message: `Product with id ${id} not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one product error: ${error}`}
    }
  }

  async update(id: number, data: UpdateProductDto) {
    try {
      const one = await this.prisma.product.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update product error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.product.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove product error: ${error}`}
    }
  }
}
