import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
})

export class AddDiscountComponent {

  _productService: ProductService = inject(ProductService);

  myForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  productID: FormControl = this.fb.control('', Validators.required);
  percentageOff: FormControl = this.fb.control('', [Validators.required, Validators.pattern("^[0-9]*$")])
  mustBuyAmount: FormControl = this.fb.control('', [Validators.pattern("^[0-9]*$")])
  onlyPayForAmount: FormControl = this.fb.control('', [Validators.pattern("^[0-9]*$")])


  ngOnInit() {
    this.myForm = this.fb.group({
      productID: this.productID,
      agreementType: ['', Validators.required],
      percentageOff: this.percentageOff,
      mustBuyAmount: this.mustBuyAmount,
      onlyPayForAmount: this.onlyPayForAmount
    });
  }

  createDatabaseDiscountAgreement() {

  }

}
