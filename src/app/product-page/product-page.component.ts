import { Component, inject } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  products: Product[] = [];

  productService = inject(ProductService);

  async ngOnInit(): Promise<void> {
    this.products = await this.productService.fetchProducts();
  }
}
