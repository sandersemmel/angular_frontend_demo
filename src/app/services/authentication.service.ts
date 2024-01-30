import { Injectable, inject, signal } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  $isLoggedIn = signal<LoggedUser>({ isLoggedin: false });
  _router: Router = inject(Router);

  constructor() {
    let isLoggedIn: boolean = window.localStorage.getItem("isLoggedIn") as unknown as boolean;
    let currentUser = window.localStorage.getItem("currentUser");

    if (isLoggedIn && currentUser) {
      this.$isLoggedIn.update(() => {
        let loggedCustomer: LoggedUser = {
          isLoggedin: true,
          customer: JSON.parse(currentUser!)
        }
        return loggedCustomer;
      })
    } else {
      this.logout();
    }

  }

  login(customer: Customer) {
    window.localStorage.setItem('isLoggedIn', "true");
    window.localStorage.setItem('currentUser', JSON.stringify(customer));
    this.$isLoggedIn.update(() => {
      return { customer: customer, isLoggedin: true }
    });
  }

  logout() {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem('currentUser');
    this.$isLoggedIn.update(() => {
      return { isLoggedin: false }
    });
    this._router.navigate(['login']);

  }
}

export interface LoggedUser {
  isLoggedin: boolean,
  customer?: Customer;
}