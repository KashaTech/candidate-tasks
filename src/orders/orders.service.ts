import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { Order } from "./schemas/order.schema";
import { CreateOrdersDto } from "./dto/createOrders.dto";
import { Types } from "mongoose";
import { UpdateOrdersDto } from "./dto/updateOrders.dto";

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(order: CreateOrdersDto): Promise<Order> {
    return this.ordersRepository.create({ ...order });
  }

  async getAllOrders(): Promise<Order[]> {
    return this.ordersRepository.find({});
  }

  async updateOrder(orderId: string, order: UpdateOrdersDto): Promise<Order> {
    return this.ordersRepository.findOneAndUpdate(
      { _id: new Types.ObjectId(orderId) },
      order,
    );
  }

  async deleteOrder(orderId: string) {
    return this.ordersRepository.deleteMany({
      _id: new Types.ObjectId(orderId),
    });
  }
}
