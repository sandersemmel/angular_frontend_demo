import { Injectable, Signal, computed, inject } from '@angular/core';
import { ProductService } from './product.service';
import { CartProduct } from '../model/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  _productService: ProductService = inject(ProductService);
  basketItemsWithQuantities: Signal<CartProduct[]> = computed<CartProduct[]>(() => {
    this._productService.$basketProducts().map((product) => {
      let basketItemExistsInCart = this.basketItemsWithQuantities().find(e => e.product.id == product.id);
      //let basketItem: CartProduct = {b}
      if (basketItemExistsInCart) {
        let basketItemWithIncreasedCount: CartProduct = { ...basketItemExistsInCart, quantity: basketItemExistsInCart.quantity + 1 }
      } else {
        return []
      }
      return []
    })
  })

  constructor() {
  }

  fetchCheckoutTotal() {

  }
}
