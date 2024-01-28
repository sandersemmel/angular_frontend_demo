import { Injectable, signal } from '@angular/core';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  $isLoggedIn = signal<LoggedUser>({ isLoggedin: false });

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
    this.$isLoggedIn.update(currentValue => {
      return { ...currentValue, isLoggedin: false }
    });

  }
}

export interface LoggedUser {
  isLoggedin: boolean,
  customer?: Customer;
}