import { Injectable, NotFoundException } from '@nestjs/common';
import { AssignMastersToOrderDto, CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

const TELEGRAM_TOKEN = "7710915406:AAHbJE25Ngj2IOcP-RvRASYriXWxsOWjb24";
const CHAT_ID = 1071853006;

@Injectable()
export class OrderService {

  constructor(private readonly prisma: PrismaService){}

  async sendTelegramMessage(message: string): Promise<void> {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    } catch (error) {
      console.error('Telegram send error:', error);
    }
  }

  async create(data: CreateOrderDto, req: Request) {
    try {
      const id = req['user-id'];
  
      const one = await this.prisma.order.create({
        data: {
          location: data.location,
          address: data.address,
          paymentType: data.paymentType,
          withDelivery: data.withDelivery,
          userId: id,
          total: 0,
          date: new Date(),
        },
      });
  
      let totalCost = 0;
  
      for (const element of data.products) {
        const product = await this.prisma.product.findUnique({
          where: { id: element.productId },
        });
  
        if (!product) {
          return { message: `Product with ID ${element.productId} does not exist` };
        }
  
        const level = await this.prisma.level.findUnique({
          where: { id: element.levelId },
        });
  
        if (!level) {
          return { message: `Level with ID ${element.levelId} does not exist` };
        }
  
        await this.prisma.orderProducts.create({
          data: {
            orderId: one.id,
            productId: element.productId,
            levelId: element.levelId,
            count: element.count,
            workingTime: data.workingTime,
            timeUnit: data.timeUnit,
          },
        });
      }
  
      for (const element of data.tools) {
        const tool = await this.prisma.tools.findUnique({
          where: { id: element.toolId },
        });
  
        if (!tool) {
          return { message: `Tool with ID ${element.toolId} does not exist` };
        }
  
        totalCost += tool.price;
  
        await this.prisma.orderTools.create({
          data: {
            orderId: one.id,
            toolsId: element.toolId,
            count: element.count,
          },
        });
      }
  
      await this.prisma.order.update({
        where: { id: one.id },
        data: { total: totalCost },
      });
  
      await this.sendTelegramMessage(
        `🛒 *New Order Created!*\n\n📍 Location: ${data.location}\n🏠 Address: ${data.address}\n💰 Total: ${totalCost} UZS\n🚚 Delivery: ${data.withDelivery ? 'Yes' : 'No'}\n📅 Date: ${new Date().toLocaleString()}`
      );
  
      return { ...one, total: totalCost };
    } catch (error) {
      console.log(error);
      return { message: `Create order error: ${error}` };
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

      const one = await this.prisma.order.findMany({
        where: query,
        skip,
        take,
      })
      return one
    } catch (error) {
      console.log(error)
      return {message: `find all order error: ${error}`}
    }
  }

  async findOne(id: number) {
    try {
      const one = await this.prisma.order.findFirst({where: {id}})
      if(!one){
        return {message: `Order with ${id} id not found`}
      }
      return one
    } catch (error) {
      console.log(error)
      return {message: `find one order error: ${error}`}
    }
  }

  async update(id: number, data: UpdateOrderDto) {
    try {

      const one = await this.prisma.order.update({
        where: { id },
        data: {
          location: data.location,
          address: data.address,
          paymentType: data.paymentType,
          withDelivery: data.withDelivery,
          total: 0,
          date: new Date(),
        }
      });
      
      await this.prisma.orderProducts.deleteMany({ where: { orderId: id } });
      await this.prisma.orderTools.deleteMany({ where: { orderId: id } })

      if(data.products?.length){
        for (const product of data.products) {
          if (data.workingTime === undefined) {
            return { message: "workingTime is required" };
          }
          if (data.timeUnit === undefined) {
            return { message: "timeUnit is required" };
          }
          const existLevel = await this.prisma.level.findFirst({where: {id: product.levelId}})
          if(!existLevel){
            return {message: `Level not exist with ${product.levelId} id`}
          }

          const existProduct = await this.prisma.product.findFirst({where: {id: product.productId}})
          if(!existProduct){
            return {message: `Product not exist with ${product.productId} id`}
          }
          await this.prisma.orderProducts.create({
            data: {
              orderId: id,
              productId: product.productId,
              levelId: product.levelId,
              count: product.count,
              workingTime: data.workingTime,
              timeUnit: data.timeUnit,
            },
          });
        }
      }
      
      if(data.tools?.length)
      for (const tool of data.tools) {
        const existTool = await this.prisma.order.findFirst({where: {id: tool.toolId}})
        if(!existTool){
          return {message: `Tool not exist with ${tool.toolId} id`}
        }
        await this.prisma.orderTools.create({
          data: {
            orderId: id,
            toolsId: tool.toolId,
            count: tool.count,
          },
        });
      }

      return one
    } catch (error) {
      console.log(error)
      return {message: `update order error: ${error}`}
    }
  }

  async remove(id: number) {
    try {
      const one = await this.prisma.order.delete({where: {id}})
      return one
    } catch (error) {
      console.log(error)
      return {message: `remove order error: ${error}`}
    }
  }

  async assignMastersToOrder(dto: AssignMastersToOrderDto) {
    const { orderId, masterIds } = dto;

    const order = await this.prisma.order.findUnique({ where: { id: orderId } });
    if (!order) throw new NotFoundException(`Order ${orderId} not found`);

    const masters = await this.prisma.master.findMany({
      where: { id: { in: masterIds } },
    });

    if (masters.length !== masterIds.length) {
      throw new NotFoundException(`One or more masters not found`);
    }

    const createdAssignments = await Promise.all(
      masterIds.map((masterId) =>
        this.prisma.orderMasters.create({
          data: {
            orderId,
            masterId,
          },
        }),
      ),
    );

    return {
      message: 'Masters assigned to order successfully',
      assignments: createdAssignments,
    };
  }
}
