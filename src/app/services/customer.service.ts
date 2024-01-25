import { Injectable, inject, signal } from '@angular/core';
import { DatabaseCustomerService } from '../outgoing-services/database-customer.service';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  $databaseCustomers = signal<Customer[]>([]);
  _DB_CustomerService: DatabaseCustomerService = inject(DatabaseCustomerService);

  constructor() {
    this.fetchAllDatabaseCustomers();
  }

  async fetchAllDatabaseCustomers() {
    let db_customers = await this._DB_CustomerService.fetchDatabaseCustomers();
    this.$databaseCustomers.set(db_customers);
  }

}
