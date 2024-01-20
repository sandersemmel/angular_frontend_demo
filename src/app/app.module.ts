import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product-page/product/product.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent, ProductPageComponent, ProductComponent],
  imports: [BrowserModule, AppRoutingModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
