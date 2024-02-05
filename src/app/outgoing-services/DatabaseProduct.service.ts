import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Keys } from '../common/Keys';

@Injectable({
  providedIn: 'root',
})
export class DatabaseProductService {
  private baseUrl: string = '';
  private productsUrl: string = Keys.devEnvUrl + '/product';
  constructor() { }

  async fetchDatabaseProducts(): Promise<Product[]> {
    const requestInit: RequestInit = {
      mode: 'cors',
    };

    let response = await fetch(
      this.productsUrl + '/getallproducts',
      requestInit
    );

    let json = await response.json();
    return json;
  }

  async createDatabaseProduct(product: Product) {
    let createProductUrl = this.productsUrl + "/createproduct";

    const requestInit: RequestInit = {
      method: "post",
      body: JSON.stringify(product),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    let response = await fetch(createProductUrl, requestInit);
  }
}
