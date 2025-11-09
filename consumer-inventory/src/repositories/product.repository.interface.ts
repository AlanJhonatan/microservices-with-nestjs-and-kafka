import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { Product } from 'src/products/entities/product.entity';

export abstract class ProductRepository {
  abstract create(data: CreateProductDto): Promise<void>;
  abstract getAll(): Promise<Product[]>;
  abstract findOne(id: string): Promise<Product | null>;
  abstract update(id: string, data: UpdateProductDto): Promise<Product>;
  abstract remove(id: string): Promise<void>;
}
