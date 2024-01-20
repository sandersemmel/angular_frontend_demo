import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8080';
  private productsUrl: string = this.baseUrl + '/product';
  constructor() {}

  async fetchProducts(): Promise<Product[]> {
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
}
