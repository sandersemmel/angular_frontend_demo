import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Product';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToBasketEvent = new EventEmitter<Product>();
  loading = false;


  productService: ProductService = inject(ProductService);
  _checkoutService: CheckoutService = inject(CheckoutService);


  buyClicked() {
    this.loading = true;

    this._checkoutService.addProductToCart(this.product)
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
