import { CartProduct } from "src/app/model/CartProduct";

export interface DTO_CreateOrder {
  customerID: number,
  productQuantity: CartProduct[],

}
