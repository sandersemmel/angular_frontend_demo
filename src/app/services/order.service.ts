import { Injectable, inject, signal } from '@angular/core';
import { DatabaseOrderService } from '../outgoing-services/database-order.service';
import { DTO_CreateOrder } from '../dto/outgoing/DTO_CreateOrder';
import { Order } from '../model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  _DB_orderService: DatabaseOrderService = inject(DatabaseOrderService);
  $orders = signal<Order[]>([]);

  constructor() { }

  async createOrder(DTO_CreateCustomer: DTO_CreateOrder): Promise<Order> {
    let orderServiceResp = await this._DB_orderService.createDatabaseOrder(DTO_CreateCustomer);
    let order: Order = orderServiceResp.data[0];
    if (order) {
      this.$orders.update(e => {
        return [...e, order];
      })
    }
    return order;
  }

  async getOrders() {

  }

}
