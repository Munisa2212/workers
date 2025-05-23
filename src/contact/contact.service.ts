import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateContactDto) {
    try {
      const one = await this.prisma.contact.create({data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `create contact error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.contact.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all contact error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.contact.findFirst({where: {id}})
      if(!one){
        return {message: `Contact with ${id} id not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one contact error: ${error}`}
    }
  }

  async update(id: number, data: UpdateContactDto) {
    try {
      const one =  await this.prisma.contact.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update contact error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.contact.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove contact error: ${error}`}
    }
  }
}
