import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { SmsModule } from './sms/sms.module';
import { RegionModule } from './region/region.module';
import { BrandModule } from './brand/brand.module';
import { CapacityModule } from './capacity/capacity.module';
import { SizeModule } from './size/size.module';
import { ToolModule } from './tool/tool.module';
import { MasterModule } from './master/master.module';
import { ProductModule } from './product/product.module';
import { LevelModule } from './level/level.module';
import { OrderModule } from './order/order.module';
import { SessionModule } from './session/session.module';
import { PartnerModule } from './partner/partner.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { FaqModule } from './faq/faq.module';
import { ContactModule } from './contact/contact.module';
import { GeneralinfoModule } from './generalinfo/generalinfo.module';
import { CommentModule } from './comment/comment.module';
import { BasketModule } from './basket/basket.module';
import { MailModule } from './mail/mail.module';
import { MulterController } from './multer/multer.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [PrismaModule, UserModule, SmsModule, RegionModule, BrandModule, CapacityModule, SizeModule, ToolModule, MasterModule, ProductModule, LevelModule, OrderModule, SessionModule, PartnerModule, ShowcaseModule, FaqModule, ContactModule, GeneralinfoModule, CommentModule, BasketModule, MailModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
    serveRoot: '/file'})],
  controllers: [AppController, MulterController],
  providers: [AppService],
})
export class AppModule {}
