import { Component, effect, inject, signal } from '@angular/core';
import { Product } from '../model/Product';
import { DatabaseProductService } from '../outgoing-services/DatabaseProduct.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  _productService: ProductService = inject(ProductService);

  ngOnInit() {
    console.log("Product Page: ");
    console.log(this._productService.$allProducts());
  }

}
