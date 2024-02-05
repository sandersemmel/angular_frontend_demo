import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/Order';
import { CheckoutService } from 'src/app/services/checkout.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-complete-page',
  templateUrl: './order-complete-page.component.html'
})
export class OrderCompletePageComponent implements OnInit {
  _activatedRoute = inject(ActivatedRoute);
  _orderService: OrderService = inject(OrderService);
  _checkoutService: CheckoutService = inject(CheckoutService);

  order!: Order;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(e => {
      this.order = window.history.state.order;
      this._checkoutService.basketItems.set([]);
    })
  }


}
