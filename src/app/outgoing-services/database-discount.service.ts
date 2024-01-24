import { Injectable } from '@angular/core';
import { Keys } from '../common/Keys';
import { DTO_DiscountAgreement } from '../dto/DTO_DiscountAgreement';

@Injectable({
  providedIn: 'root'
})
export class DatabaseDiscountService {

  private discountUrl: string = Keys.devEnvUrl + '/discountagreement';


  constructor() { }

  async createDatabaseDiscountAgreement(DTO_DiscountAgreement: DTO_DiscountAgreement): Promise<void> {
    const requestInit: RequestInit = {
      mode: 'cors',
      body: JSON.stringify(DTO_DiscountAgreement),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    let response = await fetch(
      this.discountUrl + '/creatediscount', requestInit

    );

    let json = await response.json();
    return json;
  }
}
