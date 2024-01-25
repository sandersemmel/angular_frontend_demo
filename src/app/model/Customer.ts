import { DiscountAgreement } from "./DiscountAgreement";

export interface Customer {
  id: number;
  discountAgreements: DiscountAgreement[];
}