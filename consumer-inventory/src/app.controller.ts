/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import * as productRepository from './repositories/product.repository';

@Controller()
export class AppController {
  constructor(private productRepository: productRepository.ProductRepository) {}

  @Get('products')
  async getProducts() {
    const products = await this.productRepository.getAll();

    return {
      data: {
        ...products,
      },
    };
  }

  @Post('product')
  @HttpCode(201)
  async addProduct(@Body() createDTO: productRepository.ProductCreateDTO) {
    await this.productRepository.create(createDTO);
  }
}
