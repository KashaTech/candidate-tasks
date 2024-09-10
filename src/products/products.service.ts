import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { ProductsDto } from "./dto/products.dto";
import { Product } from "../products/schemas/product.schema";
import { Types } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async createProduct(product: ProductsDto): Promise<Product> {
    return this.productsRepository.create({ ...product });
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productsRepository.find({});
  }

  async updateProduct(
    productId: string,
    product: ProductsDto,
  ): Promise<Product> {
    return this.productsRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(productId) },
      product,
    );
  }

  async deleteProduct(productId: string) {
    return this.productsRepository.deleteMany({
      _id: new Types.ObjectId(productId),
    });
  }
}
