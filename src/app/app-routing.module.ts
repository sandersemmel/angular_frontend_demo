import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { AddCustomerComponent } from './management-page/add-customer/add-customer.component';
import { Guard } from './services/authentication/guard';

const routes: Routes = [
  {
    title: 'products',
    component: ProductPageComponent,
    path: 'products',
    canActivate: [Guard]
  },
  {
    title: "checkout",
    component: CheckoutPageComponent,
    path: "checkout",
    canActivate: [Guard]
  },
  {
    title: "management",
    component: ManagementPageComponent,
    path: "management",
    canActivate: [Guard]
  },
  {
    title: "login",
    component: AddCustomerComponent,
    path: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
