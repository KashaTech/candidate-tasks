import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { Order } from "./schemas/order.schema";
import { CreateOrdersDto } from "./dto/createOrders.dto";
import { JwtAuthGuard } from "../auth/guards/jwtAuth.guard";
import { UpdateOrdersDto } from "./dto/updateOrders.dto";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOrders(@Body() createOrdersDto: CreateOrdersDto): Promise<Order> {
    return this.ordersService.createOrder(createOrdersDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllOrders(): Promise<Order[]> {
    return this.ordersService.getAllOrders();
  }

  @Patch(":orderId")
  async updateOrder(
    @Param("orderId") orderId: string,
    @Body() updateOrdersDto: UpdateOrdersDto,
  ): Promise<Order> {
    return this.ordersService.updateOrder(orderId, updateOrdersDto);
  }

  @Delete(":orderId")
  async deleteOrder(@Param("orderId") orderId: string) {
    return this.ordersService.deleteOrder(orderId);
  }
}
