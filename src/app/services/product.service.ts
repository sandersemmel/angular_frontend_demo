import { Component, Injectable, OnInit, inject, signal } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { DatabaseProductService } from 'src/app/outgoing-services/DatabaseProduct.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  $basketProducts = signal<Product[]>([]);
  $allProducts = signal<Product[]>([]);
  private _DB_ProductService: DatabaseProductService = inject(DatabaseProductService);

  constructor() {
    this.fetchAllProducts();
  }

  async fetchAllProducts() {
    let allFetchedProducts = await this._DB_ProductService.fetchDatabaseProducts();
    this.$allProducts.set(allFetchedProducts);
  }

  addProductToBasket(product: Product) {
    this.$basketProducts.update((products) => { return [...products, product]; });
  }
  removeProductFromBasketHandler(product: Product) {
    this.$basketProducts.update((products) => {
      return products.filter((p) => p.id == product.id);
    });
  }
  createDatabaseProduct(param: any) {
    this._DB_ProductService.createDatabaseProduct(param);
  }
}
