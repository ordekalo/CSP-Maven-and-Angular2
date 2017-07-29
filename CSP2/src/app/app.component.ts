import {Component} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-csp',
  template: `
    <h2>{{title}}</h2>
    <b><h1>{{subtitle}}</h1></b>
    <b *ngIf="(type !== null)" class="panel-heading">Welecome {{name}}</b>
    <div class="header-bar"></div>
    <!--This Is The Navigation Bar For The Different Types Of Users-->
    <nav>
      <!--ADMIN-->
      <a *ngIf="(type === 'ADMIN')" routerLink="/ADMIN" routerLinkActive="active">Add Company</a>
      <a *ngIf="(type === 'ADMIN')" routerLink="/ADMIN1" routerLinkActive="active">Search Company</a>
      <a *ngIf="(type === 'ADMIN')" routerLink="/ADMIN2" routerLinkActive="active">Add Customer</a>
      <a *ngIf="(type === 'ADMIN')" routerLink="/ADMIN3" routerLinkActive="active">Search Customer</a>
      <!--COMPANY-->
      <a *ngIf="(type === 'COMPANY')" routerLink="/COMPANY" routerLinkActive="active">Add Coupon</a>
      <a *ngIf="(type === 'COMPANY')" routerLink="/COMPANY1" routerLinkActive="active">Search Coupon</a>
      <!--CUSTOMER-->
      <a *ngIf="(type === 'CUSTOMER')" routerLink="/CUSTOMER" routerLinkActive="active">Purchase Coupon</a>
      <a *ngIf="(type === 'CUSTOMER')" routerLink="/CUSTOMER1" routerLinkActive="active">Search Owned Coupon</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSP';
  subtitle = ' By Or Dekalo';
  type = Cookie.get('clientType');
  name = Cookie.get('userName');
}
