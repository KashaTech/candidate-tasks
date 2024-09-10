import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsDto } from "./dto/products.dto";
import { Product } from "../products/schemas/product.schema";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProducts(
    @Body() createProductsDto: ProductsDto,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductsDto);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Patch(":productId")
  async updateProduct(
    @Param("productId") productId: string,
    @Body() updateProductsDto: ProductsDto,
  ): Promise<Product> {
    return this.productsService.updateProduct(productId, updateProductsDto);
  }

  @Delete(":productId")
  async deleteProduct(@Param("productId") productId: string) {
    return this.productsService.deleteProduct(productId);
  }
}
