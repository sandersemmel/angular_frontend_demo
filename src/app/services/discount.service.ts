import { Injectable, inject, signal } from '@angular/core';
import { DatabaseDiscountService } from '../outgoing-services/database-discount.service';
import { DTO_DiscountAgreement } from '../dto/DTO_DiscountAgreement';
import { DiscountAgreement } from '../model/DiscountAgreement';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  $discounts = signal<DiscountAgreement[]>([]);
  _DB_DiscountService: DatabaseDiscountService = inject(DatabaseDiscountService);

  constructor() {
    this.fetchDatabaseDiscountAgreements();
  }

  createDatabaseDiscount(DTO_DiscountAgreement: DTO_DiscountAgreement) {
    this._DB_DiscountService.createDatabaseDiscountAgreement(DTO_DiscountAgreement)
    setTimeout(() => { this.fetchDatabaseDiscountAgreements() }, (1000));
  }

  async fetchDatabaseDiscountAgreements() {
    let agreements = await this._DB_DiscountService.fetchDatabaseAgreements();
    await this.createLabelsForDiscounts(agreements);
    this.$discounts.set(agreements);
  }

  async createLabelsForDiscounts(agreements: DiscountAgreement[]): Promise<DiscountAgreement[]> {
    return agreements.map((agreement) => {

      if (agreement.agreementType === "PERCENTAGE_OFF_PRODUCT") {
        agreement.label = 'Product Discount ' + agreement.product.name + '[' + agreement.product.id + '] ' + agreement.percentageOff + ' %'
      }

      if (agreement.agreementType === "PERCENTAGE_OFF_WHOLE_ORDER") {
        agreement.label = 'Order Discount ' + agreement.percentageOff;
      }

      if (agreement.agreementType === "BUY_X_ONLY_PAY_Y") {
        agreement.label = 'Buy ' + ' ' + agreement.product.name + '[' + agreement.product.id + '] ' + ' Pay for ' + agreement.onlyPayForAmount;
      }

      return agreement;
    });


  }
}
