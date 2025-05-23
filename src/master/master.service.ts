import { Injectable } from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MasterService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateMasterDto) {
    try {
      const existMaster = await this.prisma.master.findFirst({where: {phone: data.phone}})
      if(existMaster){
        return {message: "This master exists"}
      }

      const one = await this.prisma.master.create({data: {
        fullName: data.fullName,
        phone: data.phone,
        year: data.year,
        image: data.image,
        passportImage: data.passportImage,
        about: data.about
      }})

      for (const element of data.master_products) {
        const product = await this.prisma.product.findUnique({
          where: { id: element.product },
        });
      
        if (!product) {
          return {message: `Product with ID ${element.product} does not exist`}
        }

        const level = await this.prisma.level.findUnique({
          where: { id: element.level },
        });
      
        if (!level) {
          return {message: `Level with ID ${element.level} does not exist`}
        }
      
        await this.prisma.masterProd.create({
          data: {
            masterId: one.id,
            productId: element.product,
            minWorkingHour: element.minWorkingHour,
            levelId: element.level,
            priceHourly: element.priceHourly,
            priceDaily: element.priceDaily,
            experience: element.experience,
          },
        });
      }
      
      const masterProducts = await this.prisma.masterProd.findMany()
      console.log(masterProducts)
      return one
    } catch (error) {
      console.log(error)
      return {message: `create master error: ${error}`}
    }
  }

  async findAll() {
    try {
      const one = await this.prisma.master.findMany()
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all master error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.master.findFirst({where: {id}})
      if(!one){
        return {message: `Master with id ${id} is not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one master error: ${error}`}
    }
  }

  async update(id: number, data: UpdateMasterDto) {
    try {
      const one = await this.prisma.master.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update master error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.master.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove master error: ${error}`}
    }
  }
}
