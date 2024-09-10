import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";
import { CreateProductsDto } from "./dto/createProducts.dto";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProducts(
    @Body() createProductsDto: CreateProductsDto,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductsDto);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }
}
