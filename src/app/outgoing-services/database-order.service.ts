import { Injectable } from '@angular/core';
import { DTO_CreateOrder } from '../dto/outgoing/DTO_CreateOrder';
import { Keys } from '../common/Keys';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOrderService {

  private orderUrl: string = Keys.devEnvUrl + '/order';

  constructor() { }

  async createDatabaseOrder(DTO_createOrder: DTO_CreateOrder): Promise<void> {
    const requestInit: RequestInit = {
      mode: 'cors',
      body: JSON.stringify(DTO_createOrder),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    let response = await fetch(
      this.orderUrl + '/createorder', requestInit

    );

    let json = await response.json();
    return json;
  }
}
