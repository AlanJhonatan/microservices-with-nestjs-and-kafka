export interface ProductCreateDTO {
  name: string;
  sku: string;
  price: number;
}

export abstract class ProductRepository {
  abstract create(data: ProductCreateDTO): Promise<void>;
  abstract getAll(): Promise<any>;
}
