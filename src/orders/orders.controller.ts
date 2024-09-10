import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { Order } from "./schemas/order.schema";
import { CreateOrdersDto } from "./dto/createOrders.dto";
import { JwtAuthGuard } from "../auth/guards/jwtAuth.guard";

@Controller("orders")
export class OrdersController {
  constructor(private readonly productsService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOrders(@Body() createOrdersDto: CreateOrdersDto): Promise<Order> {
    return this.productsService.createOrder(createOrdersDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.productsService.getAllOrders();
  }
}
