import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument } from "./schemas/order.schema";
import { Model } from "mongoose";
import { EntityRepository } from "src/database/entity.repository";

@Injectable()
export class OrdersRepository extends EntityRepository<OrderDocument> {
  constructor(@InjectModel(Order.name) orderModel: Model<OrderDocument>) {
    super(orderModel);
  }
}
