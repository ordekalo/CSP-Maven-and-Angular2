import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './Login/login.component';
import {AddCompanyComponent} from './admin/AddCompany/addcompany.component';
import {AddCustomerComponent} from './admin/AddCustomer/addcustomer.component';
import {SearchCompanyComponent} from './admin/SearchCompany/searchcompany.component';
import {SearchCustomerComponent} from './admin/SearchCustomer/searchcustomer.component';
import {AddCouponComponent} from './company/AddCoupon/addcoupon.component';
import {SearchCouponComponent} from './company/SearchCoupon/searchcoupon.component';
import {PurchaseCouponComponent} from './customer/PurchaseCoupon/purchasecoupon.component';
import {SearchOwnedComponent} from './customer/SearchOwned/searchowned.component';

const routes: Routes = [
  // Login
  {path: '', redirectTo: '/Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  // ADMIN
  {path: 'ADMIN', component: AddCompanyComponent},
  {path: 'ADMIN1', component: SearchCompanyComponent},
  {path: 'ADMIN2', component: AddCustomerComponent},
  {path: 'ADMIN3', component: SearchCustomerComponent},
  // COMPANY
  {path: 'COMPANY', component: AddCouponComponent},
  {path: 'COMPANY1', component: SearchCouponComponent},
  // CUSTOMER
  {path: 'CUSTOMER', component: PurchaseCouponComponent},
  {path: 'CUSTOMER1', component: SearchOwnedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
