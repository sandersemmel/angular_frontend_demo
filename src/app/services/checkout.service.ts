import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { ProductService } from './product.service';
import { CartProduct } from '../model/CartProduct';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  _productService: ProductService = inject(ProductService);
  basketItems = signal<CartProduct[]>([]);
  totalBasketItemsCount = computed<number>((): number => {
    let total: number = this.basketItems().reduce((sum, item) => { return sum + item.quantity }, 0);
    return total;
  })

  constructor() {
  }

  addProductToCart(newProduct: Product) {
    this.basketItems.update((items) => {

      if (!items.length) {
        return [{ product: newProduct, quantity: 1 }]
      }

      let doesProductExistInCart = items.find(cartProduct => cartProduct.product.id === newProduct.id);

      if (doesProductExistInCart) {
        // update product quantities
        return items.map((cartProduct) => {
          if (cartProduct.product.id === newProduct.id) {
            return { ...cartProduct, quantity: cartProduct.quantity + 1 }
          }
          return cartProduct;

        })
      }
      // add the new product
      return [...items, { product: newProduct, quantity: 1 }];
    })
  }



}
