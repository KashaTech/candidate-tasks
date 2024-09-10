import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from "mongoose";
import { OrderProducts } from "../dto/createOrders.dto";

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  userId: string;

  @Prop()
  products: OrderProducts[];

  @Prop()
  totalPrice: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
