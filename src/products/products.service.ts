import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "./schemas/product.schema";
import { CreateProductsDto } from "./dto/createProducts.dto";

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async createProduct(product: CreateProductsDto): Promise<Product> {
    return this.productsRepository.create({ ...product });
  }
  async getAllProducts(): Promise<Product[]> {
    return this.productsRepository.find({});
  }
}
