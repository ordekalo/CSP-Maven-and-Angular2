import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminService} from './admin/admin.service';
import {CompanyService} from './company/company.service';
import {CustomerService} from './customer/customer.service';
import {LoginService} from './Login/login.service';
import {LoginComponent} from './Login/login.component';
import {AddCompanyComponent} from './admin/AddCompany/addcompany.component';
import {AddCustomerComponent} from './admin/AddCustomer/addcustomer.component';
import {SearchCompanyComponent} from './admin/SearchCompany/searchcompany.component';
import {SearchCustomerComponent} from './admin/SearchCustomer/searchcustomer.component';
import {AddCouponComponent} from './company/AddCoupon/addcoupon.component';
import {SearchCouponComponent} from './company/SearchCoupon/searchcoupon.component';
import {PurchaseCouponComponent} from './customer/PurchaseCoupon/purchasecoupon.component';
import {SearchOwnedComponent} from './customer/SearchOwned/searchowned.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    // Main
    AppComponent,
    // Login
    LoginComponent,
    // ADMIN
    AddCompanyComponent,
    AddCustomerComponent,
    SearchCompanyComponent,
    SearchCustomerComponent,
    // COMPANY
    AddCouponComponent,
    SearchCouponComponent,
    // CUSTOMER
    PurchaseCouponComponent,
    SearchOwnedComponent
  ],
  providers: [AdminService, CompanyService, CustomerService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
