import { Customer } from "./Customer";
import { DiscountAgreement } from "./DiscountAgreement";
import { Product } from "./Product";
import { SKU } from "./SKU";

export interface Order {
  products: Product[],
  sku: SKU[],
  discountAgreement: DiscountAgreement,
  customer: Customer;
  totalAfterDiscount: number;
  totalBeforeDiscount: number;

}
