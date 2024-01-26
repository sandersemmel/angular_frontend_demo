import { DiscountAgreement } from "./DiscountAgreement";

export interface Customer {
  id: number;
  name: string;
  discountAgreements: DiscountAgreement[];
}