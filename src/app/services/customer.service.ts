import { Injectable, inject, signal } from '@angular/core';
import { DatabaseCustomerService } from '../outgoing-services/database-customer.service';
import { Customer } from '../model/Customer';
import { DTO_CreateCustomer } from '../dto/outgoing/DTO_CreateCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  $allCustomers = signal<Customer[]>([]);

  attachDiscountToCustomer(id: any, id1: any) {

  }

  $databaseCustomers = signal<Customer[]>([]);
  _DB_CustomerService: DatabaseCustomerService = inject(DatabaseCustomerService);

  constructor() {
    this.fetchAllDatabaseCustomers();
  }

  async fetchAllDatabaseCustomers() {
    let db_customers = await this._DB_CustomerService.fetchDatabaseCustomers();
    this.$databaseCustomers.set(db_customers);
  }

  async createCustomer(DTO_createCustomer: DTO_CreateCustomer) {
    this._DB_CustomerService.createCustomer(DTO_createCustomer);
    setTimeout(() => { this.fetchAllDatabaseCustomers() }, (1000));
  }



}
