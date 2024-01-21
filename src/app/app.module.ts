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
import { BasketComponent } from './components/basket/basket.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { TabMenu, TabMenuModule } from 'primeng/tabmenu';
import { MenuComponent } from './components/menu/menu.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutProductListComponent } from './checkout-page/checkout-product-list/checkout-product-list.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductComponent,
    BasketComponent,
    CheckoutPageComponent,
    MenuComponent,
    TopBarComponent,
    CheckoutProductListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CardModule, ButtonModule, TabMenuModule, AvatarModule, AvatarGroupModule, RippleModule, BrowserAnimationsModule, TableModule],
  providers: [ProductService, DatabaseProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
