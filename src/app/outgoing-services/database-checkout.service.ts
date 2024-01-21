import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseCheckoutService {

  private baseUrl: string = 'http://localhost:8080';
  private checkoutUrl: string = this.baseUrl + '/checkout';

  constructor() { }

  fetchCheckoutTotal() {
    //fetch(this.checkoutUrl + )
  }
}
