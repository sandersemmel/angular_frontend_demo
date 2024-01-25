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
  }

  async fetchDatabaseDiscountAgreements() {
    let agreements = await this._DB_DiscountService.fetchDatabaseAgreements();
    this.$discounts.set(agreements);
  }


}
