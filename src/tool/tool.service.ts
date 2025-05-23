import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma/prisma.service';


var toolCodeId = 1

@Injectable()
export class ToolService {

  constructor(private readonly prisma: PrismaService){}

  async createCodeGenerator(start: number = 1, length: number = 6) {
    let current = start;
    const code = current.toString().padStart(length, '0')
    current++
    return code
  }

  async create(data: CreateToolDto) {
    try {
      const capacity = await this.prisma.capacity.findFirst({where: {id: data.capacityId}})
      if(!capacity){
        return {message: "Capacity not found."}
      }

      const size = await this.prisma.size.findFirst({where: {id: data.sizeId}})
      if(!size){
        return {message: "Size not found"}
      }

      const brand = await this.prisma.brand.findFirst({where: {id:data.brandId}})
      if(!brand){
        return {message: "Brand not found"}
      }

      const existTool = await this.prisma.tools.findFirst({where: {
        nameUz: data.nameUz, 
        nameEng: data.nameEng, 
        nameRU: data.nameRU,
        descriptionUz: data.descriptionUz,
        price: data.price
      }})
      if(existTool){
        return {message: "This tool already exists"}
      }
      
      const codeNumber = await this.createCodeGenerator(toolCodeId)
      toolCodeId++
      const one = await this.prisma.tools.create({data: {...data, code: codeNumber}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create tool error: ${error}`}
    }
  }

  async findAll(
    name: string,
    price: number,
    isActive: boolean,
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

      if (price) {
        query.price = price;
      }

      if (isActive) {
        query.isActive = isActive;
      }

      const one = await this.prisma.tools.findMany({
        where: query,
        skip,
        take
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all tool error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.tools.findFirst({where: {id}})
      if(!one){
        return {message: `tool with id ${id} not found`}
      }
      return one 
    } catch (error) {
      console.log(error)
      return {message: `find one tool error: ${error}`}
    }
  }

  async update(id: number, data: UpdateToolDto) {
    try {
      const one = await this.prisma.tools.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update tool error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.tools.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove tool error: ${error}`}
    }
  }
}
