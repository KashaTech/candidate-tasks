export type OrderProducts = {
  productId: string;
  quantity: number;
};

export class CreateOrdersDto {
  userId: string;
  products: OrderProducts[];
  totalPrice: number;
}
