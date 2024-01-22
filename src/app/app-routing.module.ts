import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ManagementPageComponent } from './management-page/management-page.component';

const routes: Routes = [
  {
    title: 'products',
    component: ProductPageComponent,
    path: 'products',
  },
  {
    title: "checkout",
    component: CheckoutPageComponent,
    path: "checkout"
  },
  {
    title: "management",
    component: ManagementPageComponent,
    path: "management"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
