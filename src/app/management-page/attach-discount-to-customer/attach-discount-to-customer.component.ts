import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-attach-discount-to-customer',
  templateUrl: './attach-discount-to-customer.component.html'
})
export class AttachDiscountToCustomerComponent implements OnInit {
  _customerService: CustomerService = inject(CustomerService);
  _discountService: DiscountService = inject(DiscountService);
  fb: FormBuilder = inject(FormBuilder);

  selectedCustomer: FormControl = this.fb.control(null, [Validators.required])
  selectedDiscount: FormControl = this.fb.control(null, [Validators.required]);

  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      selectedCustomer: this.selectedCustomer,
      selectedDiscount: this.selectedDiscount
    });
  }
}
