import { Injectable } from '@angular/core';
import { Keys } from '../common/Keys';
import { Customer } from '../model/Customer';

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

}
