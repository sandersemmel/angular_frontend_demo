import { Injectable } from '@angular/core';
import { DTO_CreateOrder } from '../dto/outgoing/DTO_CreateOrder';
import { Keys } from '../common/Keys';
import { Order } from '../model/Order';
import { BaseDTO } from '../dto/incoming/BaseDTO';

@Injectable({
  providedIn: 'root'
})
export class DatabaseOrderService {

  private orderUrl: string = Keys.devEnvUrl + '/order';

  constructor() { }

  async createDatabaseOrder(DTO_createOrder: DTO_CreateOrder): Promise<BaseDTO<Order>> {
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
