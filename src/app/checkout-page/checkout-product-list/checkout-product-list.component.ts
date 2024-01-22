import { Component, inject } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout-product-list',
  templateUrl: './checkout-product-list.component.html',
})

export class CheckoutProductListComponent {
  _productService: ProductService = inject(ProductService);
  _checkoutService: CheckoutService = inject(CheckoutService);

}
