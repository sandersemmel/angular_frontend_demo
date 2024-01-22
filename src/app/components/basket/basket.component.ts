import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  _router: Router = inject(Router);
  _productService: ProductService = inject(ProductService);
  _checkoutService: CheckoutService = inject(CheckoutService);

}
