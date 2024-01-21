import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product-page/product/product.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductService } from './services/product.service';
import { DatabaseProductService } from './outgoing-services/DatabaseProduct.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CardModule, ButtonModule],
  providers: [ProductService, DatabaseProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
