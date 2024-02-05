import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CheckoutService } from '../services/checkout.service';
import { OrderService } from '../services/order.service';
import { DTO_CreateOrder } from '../dto/outgoing/DTO_CreateOrder';
import { AuthenticationService } from '../services/authentication.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {

  _productService: ProductService = inject(ProductService);
  _checkoutService: CheckoutService = inject(CheckoutService);
  _orderService: OrderService = inject(OrderService);
  _authenticationService: AuthenticationService = inject(AuthenticationService);
  _router: Router = inject(Router);
  loading = false;

  async createOrder() {

    let dto: DTO_CreateOrder = {
      customerID: this._authenticationService.$isLoggedIn().customer?.id!,
      productQuantity: this._checkoutService.basketItems()
    }
    if (!dto.customerID) {
      return "Not able to create customer, problem with logging in..";
    }

    if (dto.productQuantity.length === 0) {
      return "No products in basket, add products first to create order..."
    }

    this.loading = true;
    let order = await this._orderService.createOrder(dto);
    setTimeout(() => {
      this.loading = false;
    }, 500);

    let navigationExtras: NavigationExtras = {
      state: {
        order: order
      }
    }
    this._router.navigate(['complete'], navigationExtras);


    return "Order created";
  }
}

