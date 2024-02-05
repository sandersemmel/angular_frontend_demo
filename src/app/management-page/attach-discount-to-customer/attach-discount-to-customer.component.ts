import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DTO_AttachDiscountToCustomer } from 'src/app/dto/outgoing/DTO_AttachCustomerToDiscount';
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
  loading = false;

  ngOnInit() {
    this.myForm = this.fb.group({
      selectedCustomer: this.selectedCustomer,
      selectedDiscount: this.selectedDiscount
    });
  }

  attachDiscountToCustomer() {
    this.loading = true;
    let attach: DTO_AttachDiscountToCustomer = {
      customerID: this.selectedCustomer.value.id,
      discountID: this.selectedDiscount.value.id
    }

    setTimeout(() => {
      this.loading = false;
    }, 500);

    this._discountService.attachDiscountToCustomer(attach);
  }
}
