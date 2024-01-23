import { Injectable } from '@angular/core';
import { Keys } from '../common/Keys';

@Injectable({
  providedIn: 'root'
})
export class DatabaseDiscountService {

  private productsUrl: string = Keys.devEnvUrl + '/product';


  constructor() { }
}
