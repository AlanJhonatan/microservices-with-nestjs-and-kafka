import { Module } from '@nestjs/common';
import { PrismaProductRepository } from 'src/repositories/prisma/prisma-product.repository';
import { ProductRepository } from 'src/repositories/product.repository.interface';
import { DatabaseModule } from 'src/shared/database.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: ProductRepository,
      useClass: PrismaProductRepository,
    },
  ],
})
export class ProductsModule {}
