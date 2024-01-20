import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() addToBasketEvent = new EventEmitter<Product>();

  emitEvent() {
    this.addToBasketEvent.emit(this.product);
  }
}
