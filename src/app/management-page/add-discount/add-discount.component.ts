import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DiscountService } from 'src/app/services/discount.service';
import { ProductService } from 'src/app/services/product.service';
import { DTO_DiscountAgreement } from 'src/app/dto/DTO_DiscountAgreement';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
})

export class AddDiscountComponent {

  //Agreement types
  PERCENTAGE_OFF_SINGLE_PRODUCT = {
    radioValue: "PERCENTAGE_OFF_PRODUCT",
    label: "Percentage off single product"
  };
  PERCENTAGE_OFF_WHOLE_ORDER = {
    radioValue: "PERCENTAGE_OFF_WHOLE_ORDER",
    label: "Percentage off whole order"
  };
  BUY_X_PAY_Y = {
    radioValue: "BUY_X_ONLY_PAY_Y",
    label: "Buy x only pay for y"
  };

  agreementTypesList = [this.PERCENTAGE_OFF_SINGLE_PRODUCT, this.PERCENTAGE_OFF_WHOLE_ORDER, this.BUY_X_PAY_Y]

  fb: FormBuilder = inject(FormBuilder);
  _productService: ProductService = inject(ProductService);
  _discountService: DiscountService = inject(DiscountService);

  myForm!: FormGroup;

  // FORM CONTROLS
  agreementType: FormControl = this.fb.control('', Validators.required);
  productID: FormControl = this.fb.control(null);
  percentageOff: FormControl = this.fb.control(null, [Validators.pattern("^[0-9]*$")])
  mustBuyAmount: FormControl = this.fb.control(null, [Validators.pattern("^[0-9]*$")])
  onlyPayForAmount: FormControl = this.fb.control(null, [Validators.pattern("^[0-9]*$")])


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
    let DTO_DiscountAgreement: DTO_DiscountAgreement = {
      productId: this.productID.value?.id,
      agreementType: this.agreementType.value,
      percentageOff: this.percentageOff.value ?? 0,
      mustBuyAmount: this.mustBuyAmount.value ?? 0,
      onlyPayForAmount: this.onlyPayForAmount.value ?? 0
    }

    this._discountService.createDatabaseDiscount(DTO_DiscountAgreement);
  }

}
