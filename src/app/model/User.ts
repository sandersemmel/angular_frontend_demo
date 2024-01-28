import { Customer } from "./Customer";

export interface User {
  loggedIn: boolean;
  customer: Customer;
}