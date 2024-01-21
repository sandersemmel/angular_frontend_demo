import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {

  _productService: ProductService = inject(ProductService);

}
