import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DTO_CreateCustomer } from 'src/app/dto/outgoing/DTO_CreateCustomer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent {

  fb: FormBuilder = inject(FormBuilder)
  _customerService: CustomerService = inject(CustomerService);
  _authenticationService: AuthenticationService = inject(AuthenticationService);

  myForm!: FormGroup;
  customerNameControl: FormControl = this.fb.control([''], Validators.required);

  ngOnInit() {
    this.myForm = this.fb.group({
      customerName: this.customerNameControl
    });
  }
  createCustomer() {
    let DTO_DiscountAgreement: DTO_CreateCustomer = {
      name: this.customerNameControl.value
    }
    this._customerService.createCustomer(DTO_DiscountAgreement)
  }
}
