import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartnerService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreatePartnerDto) {
    try {
      const one = await this.prisma.partners.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create partner error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.partners.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all partner error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.partners.findFirst({where: {id}})
      if(!one){
        return {message: `Partner with ${id} id not found`}
      }

      return one
    } catch (error) {
      console.log(error)
      return {message: `find one partner error: ${error}`}
    }
  }

  async update(id: number, data: UpdatePartnerDto) {
    try {
      const one = await this.prisma.partners.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update partner error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.partners.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove partner error: ${error}`}
    }
  }
}
