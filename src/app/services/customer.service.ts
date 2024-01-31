import { Injectable, inject, signal } from '@angular/core';
import { DatabaseCustomerService } from '../outgoing-services/database-customer.service';
import { Customer } from '../model/Customer';
import { DTO_CreateCustomer } from '../dto/outgoing/DTO_CreateCustomer';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  $allCustomers = signal<Customer[]>([]);
  $databaseCustomers = signal<Customer[]>([]);
  _DB_CustomerService: DatabaseCustomerService = inject(DatabaseCustomerService);
  _authenticationService: AuthenticationService = inject(AuthenticationService);


  constructor() {
    this.fetchAllDatabaseCustomers();
  }

  async fetchAllDatabaseCustomers() {
    let db_customers = await this._DB_CustomerService.fetchDatabaseCustomers();
    if (db_customers.length > 0) {
      this.$databaseCustomers.set(db_customers);
    } else {
      this._authenticationService.logout();
    }

  }

  async createCustomer(DTO_createCustomer: DTO_CreateCustomer) {
    let customer = await this._DB_CustomerService.createCustomer(DTO_createCustomer);
    if (customer.data) {
      this._authenticationService.login(customer.data[0]);
      setTimeout(() => { this.fetchAllDatabaseCustomers() }, (1000));
    }

  }



}
