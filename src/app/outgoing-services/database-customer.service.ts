import { Injectable } from '@angular/core';
import { Keys } from '../common/Keys';
import { Customer } from '../model/Customer';
import { DTO_CreateCustomer } from '../dto/outgoing/DTO_CreateCustomer';

@Injectable({
  providedIn: 'root'
})
export class DatabaseCustomerService {

  private customerUrl: string = Keys.devEnvUrl + '/customer';

  constructor() { }

  async fetchDatabaseCustomers(): Promise<Customer[]> {
    const requestInit: RequestInit = {
      mode: 'cors',
    };

    let response = await fetch(
      this.customerUrl + '/getallcustomers',
      requestInit
    );

    let json = await response.json();
    return json;
  }

  async createCustomer(DTO_CreateCustomer: DTO_CreateCustomer) {

    let createCustomer = this.customerUrl + "/createcustomer";

    const requestInit: RequestInit = {
      method: "post",
      body: JSON.stringify(DTO_CreateCustomer),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    let response = await fetch(createCustomer, requestInit);

    console.log(await response.json());


  }
}
