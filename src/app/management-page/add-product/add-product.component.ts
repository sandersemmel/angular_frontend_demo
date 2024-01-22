import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})

export class AddProductComponent implements OnInit {

  _productService: ProductService = inject(ProductService);

  myForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);
  productPrice: FormControl = this.fb.control('', [Validators.required, Validators.pattern("^[0-9]*$")])

  ngOnInit() {
    this.myForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: this.productPrice,
      SKU: ['', [Validators.required]],
    });
  }

}
