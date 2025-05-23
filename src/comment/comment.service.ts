import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class CommentService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateCommentDto, req: Request) {
    try {
      let id = req["user-id"]
      const existorder = await this.prisma.order.findFirst({where: {id: data.orderId}})
      if(!existorder){
        return {message: `Order with ${data.orderId} id not found`}
      }

      const one = await this.prisma.comment.create({data: {
        text: data.text,
        userId: id,
        orderId: data.orderId
      }})

      for (const element of data.master){
        const master  = await this.prisma.master.findUnique({
          where: { id: element.masterId },
        });
      
        if (!master) {
          return {message: `Master with ID ${element.masterId} does not exist`}
        }

        await this.prisma.masterRatings.create({data: {
          star: element.star,
          masterId: element.masterId,
          commentId: one.id
        }})
      }
    } catch (error) {
      console.log(error)
      return {message: `create comment error: ${error}`}
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

      const one = await this.prisma.comment.findMany({
        where: query,
        skip,
        take
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all ccomment error`}
    }
  }

  async update(id: number, data: UpdateCommentDto) {
    try {
      const one = await this.prisma.comment.update({where: {id}, data})
      return one
    } catch (error) {
      console.log(error)
      return {message: `update ccomment error`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.comment.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove ccomment error`}
    }
  }
}
