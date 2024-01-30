import { Injectable, inject } from '@angular/core';
import { DatabaseOrderService } from '../outgoing-services/database-order.service';
import { DTO_CreateOrder } from '../dto/outgoing/DTO_CreateOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _DB_orderService: DatabaseOrderService = inject(DatabaseOrderService);

  constructor() { }

  async createOrder(DTO_CreateCustomer: DTO_CreateOrder) {
    return this._DB_orderService.createDatabaseOrder(DTO_CreateCustomer);
  }

}
