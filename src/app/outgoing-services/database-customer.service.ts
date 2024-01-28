import { Injectable } from '@angular/core';
import { Keys } from '../common/Keys';
import { Customer } from '../model/Customer';
import { DTO_CreateCustomer } from '../dto/outgoing/DTO_CreateCustomer';
import { BaseDTO } from '../dto/incoming/BaseDTO'

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
    let customers: Customer[] = json.data;

    return customers;
  }

  async createCustomer(DTO_CreateCustomer: DTO_CreateCustomer): Promise<BaseDTO<Customer>> {
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
    return await response.json();
  }
}
