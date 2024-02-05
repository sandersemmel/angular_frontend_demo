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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './management-page/add-product/add-product.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { Divider, DividerModule } from 'primeng/divider';
import { AddDiscountComponent } from './management-page/add-discount/add-discount.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AttachDiscountToCustomerComponent } from './management-page/attach-discount-to-customer/attach-discount-to-customer.component';
import { AddCustomerComponent } from './management-page/add-customer/add-customer.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { OrderCompletePageComponent } from './ordercomplete-page/order-complete-page/order-complete-page.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';




@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductComponent,
    BasketComponent,
    CheckoutPageComponent,
    MenuComponent,
    TopBarComponent,
    CheckoutProductListComponent,
    AddProductComponent,
    ManagementPageComponent,
    AddDiscountComponent,
    AttachDiscountToCustomerComponent,
    AddCustomerComponent,
    UserprofileComponent,
    LogoutComponent,
    OrderCompletePageComponent

  ],
  imports: [BrowserModule, AppRoutingModule, CardModule,
    ButtonModule, TabMenuModule, AvatarModule,
    AvatarGroupModule, RippleModule, BrowserAnimationsModule,
    TableModule, ReactiveFormsModule, FormsModule,
    InputTextModule, MessagesModule, MessageModule, DividerModule, DropdownModule, RadioButtonModule],
  providers: [ProductService, DatabaseProductService, AnimateOnScrollModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
