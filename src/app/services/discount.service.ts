import { Injectable, inject } from '@angular/core';
import { DatabaseDiscountService } from '../outgoing-services/database-discount.service';
import { DTO_DiscountAgreement } from '../dto/DTO_DiscountAgreement';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  _DB_DiscountService: DatabaseDiscountService = inject(DatabaseDiscountService);

  createDatabaseDiscount(DTO_DiscountAgreement: DTO_DiscountAgreement) {
    this._DB_DiscountService.createDatabaseDiscountAgreement(DTO_DiscountAgreement)
  }
  constructor() { }
}
