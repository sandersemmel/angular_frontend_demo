import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})

export class AddProductComponent implements OnInit {
  myForm!: FormGroup;

  fb: FormBuilder = inject(FormBuilder);

  ngOnInit() {
    this.myForm = this.fb.group({
      // Example form controls
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      SKU: ['', [Validators.required]],
    });
  }

}
