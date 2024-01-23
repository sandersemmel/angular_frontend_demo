import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
})

export class AddDiscountComponent {
  fb: FormBuilder = inject(FormBuilder);

  //Agreement types
  PERCENTAGE_OFF_SINGLE_PRODUCT = {
    radioValue: "PERCENTAGE_OFF_SINGLE_PRODUCT",
    label: "Percentage off single product"
  };
  PERCENTAGE_OFF_WHOLE_ORDER = {
    radioValue: "PERCENTAGE_OFF_WHOLE_ORDER",
    label: "Percentage off whole order"
  };
  BUY_X_PAY_Y = {
    radioValue: "BUY_X_PAY_Y",
    label: "Buy x only pay for y"
  };

  agreementTypesList = [this.PERCENTAGE_OFF_SINGLE_PRODUCT, this.PERCENTAGE_OFF_WHOLE_ORDER, this.BUY_X_PAY_Y]

  _productService: ProductService = inject(ProductService);
  myForm!: FormGroup;

  // FORM CONTROLS
  agreementType: FormControl = this.fb.control('', Validators.required);
  productID: FormControl = this.fb.control('');
  percentageOff: FormControl = this.fb.control('', [Validators.pattern("^[0-9]*$")])
  mustBuyAmount: FormControl = this.fb.control('', [Validators.pattern("^[0-9]*$")])
  onlyPayForAmount: FormControl = this.fb.control('', [Validators.pattern("^[0-9]*$")])


  ngOnInit() {
    this.myForm = this.fb.group({
      productID: this.productID,
      agreementType: this.agreementType,
      percentageOff: this.percentageOff,
      mustBuyAmount: this.mustBuyAmount,
      onlyPayForAmount: this.onlyPayForAmount
    });
  }

  createDatabaseDiscountAgreement() {

  }

}
