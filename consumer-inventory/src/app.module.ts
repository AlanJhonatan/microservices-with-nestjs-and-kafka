import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { PrismaProductRepository } from './repositories/prisma/prisma-product-repository';
import { ProductRepository } from './repositories/product.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
})
export class AppModule {}
