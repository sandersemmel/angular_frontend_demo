import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})

export class AddProductComponent implements OnInit {

  _productService: ProductService = inject(ProductService);
  loading = false;

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

  createDatabaseProduct() {
    this.loading = true;
    let product: Product = {
      name: this.myForm.get("productName")?.value,
      price: this.myForm.get("productPrice")?.value,
      id: 0,
      SKU: this.myForm.get("SKU")?.value,
    }

    this._productService.createDatabaseProduct(product);
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

}
