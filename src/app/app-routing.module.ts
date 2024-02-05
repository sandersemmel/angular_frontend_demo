import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import { AddCustomerComponent } from './management-page/add-customer/add-customer.component';
import { Guard } from './services/authentication/guard';
import { OrderCompletePageComponent } from './ordercomplete-page/order-complete-page/order-complete-page.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { UserPageComponent } from './user-page/user-page.component';

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
    path: "login",
    canActivate: [Guard]
  },
  {
    title: "complete",
    component: OrderCompletePageComponent,
    path: "complete",
    canActivate: [Guard]
  },
  {
    title: "profile",
    component: UserPageComponent,
    path: "profile",
    canActivate: [Guard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
