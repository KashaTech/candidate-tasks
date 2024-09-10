import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { Order } from "./schemas/order.schema";
import { CreateOrdersDto } from "./dto/createOrders.dto";

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(order: CreateOrdersDto): Promise<Order> {
    return this.ordersRepository.create({ ...order });
  }
  async getAllOrders(): Promise<Order[]> {
    return this.ordersRepository.find({});
  }
}
