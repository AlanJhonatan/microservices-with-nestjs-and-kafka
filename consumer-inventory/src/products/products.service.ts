import { Injectable } from '@nestjs/common';
import { Product } from 'generated/prisma';
import { ProductRepository } from 'src/repositories/product.repository.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    await this.productRepository.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.getAll();

    return products;
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);

    return product;
  }

  async update(id: string, data: UpdateProductDto) {
    const updatedProduct = await this.productRepository.update(id, data);

    return updatedProduct;
  }

  async remove(id: string) {
    return await this.productRepository.remove(id);
  }
}
