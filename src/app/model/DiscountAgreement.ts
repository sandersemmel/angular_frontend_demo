import { Product } from "./Product";

export interface DiscountAgreement {
  product: Product;
  agreementType: string;
  percentageOff: number;
  mustBuyAmount: number;
  onlyPayForAmount: number;
  label: string;
}
