import { Injectable } from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { Product } from 'src/products/entities/product.entity';
import { PrismaService } from 'src/repositories/prisma/prisma.service';
import { ProductRepository } from '../product.repository.interface';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<any> {
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

  async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();

    return {
      ...products,
    };
  }

  async findOne(id: string): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  async update(id: string, data: UpdateProductDto): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: {
        id,
      },
      data,
    });

    return updatedProduct;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
