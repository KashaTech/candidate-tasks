import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { Order } from "./schemas/order.schema";
import { CreateOrdersDto } from "./dto/createOrders.dto";

@Controller("orders")
export class OrdersController {
  constructor(private readonly productsService: OrdersService) {}

  @Post()
  async createOrders(@Body() createOrdersDto: CreateOrdersDto): Promise<Order> {
    return this.productsService.createOrder(createOrdersDto);
  }

  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.productsService.getAllOrders();
  }
}
