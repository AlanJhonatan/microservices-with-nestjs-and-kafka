import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductCreateDTO, ProductRepository } from '../product.repository';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductCreateDTO): Promise<any> {
    const { name, price, sku } = data;

    const product = await this.prisma.product.create({
      data: {
        name,
        sku,
        price,
        stock: 0,
        available: 0,
      },
    });

    return {
      ...product,
    };
  }

  async getAll(): Promise<any> {
    const products = await this.prisma.product.findMany();

    return {
      products,
    };
  }
}
