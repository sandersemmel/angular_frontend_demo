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

  async fetchAllProducts(): Promise<Product[]> {
    let allFetchedProducts = await this._DB_ProductService.fetchDatabaseProducts();
    this.$allProducts.set(allFetchedProducts);
    return allFetchedProducts;
  }
  async fetchFromDatabase(): Promise<Product[]> {
    return await this._DB_ProductService.fetchDatabaseProducts();
  }

  addProductToBasket(product: Product) {
    this.$basketProducts.update((products) => { return [...products, product]; });
  }
  removeProductFromBasketHandler(product: Product) {
    this.$basketProducts.update((products) => {
      return products.filter((p) => p.id == product.id);
    });
  }
  async createDatabaseProduct(product: Product) {
    this._DB_ProductService.createDatabaseProduct(product);
    setTimeout(() => { this.fetchAllProducts() }, (1000));
  }
}
