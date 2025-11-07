import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

interface ProductCreateDTO {
  name: string;
  sku: string;
  price: number;
}

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('products')
  async getProducts() {
    const products = await this.prisma.product.findMany();

    return {
      data: {
        products,
      },
    };
  }

  @Post('product')
  async addProduct(@Body() createDTO: ProductCreateDTO) {
    console.log('received', createDTO);

    const { name, price, sku } = createDTO;

    const newProduct = await this.prisma.product.create({
      data: {
        name,
        sku,
        price,
        stock: 0,
        available: 0,
      },
    });

    return {
      data: {
        ...newProduct,
      },
    };
  }
}
