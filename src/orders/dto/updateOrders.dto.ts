import { OrderProducts } from "./createOrders.dto";

export class UpdateOrdersDto {
  products: OrderProducts[];
  totalPrice: number;
}
