// /**
//  * Created by Or Dekalo on 11/07/2017.
//  */
// import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import {Cookie} from 'ng2-cookies/ng2-cookies';
// import {Coupon} from '../baseobjects/Coupon';
// import {CustomerService} from './customer.service';
//
// @Component({
//   selector: 'app-customer',
//   templateUrl: './customerCoupon.component.html',
//   styleUrls: ['./customerCoupon.component.css']
// })
// export class CustomerComponent implements OnInit {
//   currentCustName: string;
//   coupons: Coupon[];
//   searchCoupons: Array<Coupon>;
//   @Input() selectedCoupon: Coupon;
//   selectedMode: boolean;
//   regularMode = true;
//   addingCoupon = false;
//   error: any;
//
//   constructor(private router: Router,
//               private customerService: CustomerService) {
//   }
//
//   searchByTitle(title: string): void {
//     this.searchCoupons = this.coupons.filter(coupon => coupon.title === title);
//   }
//
//   searchByType(type: string): void {
//     this.customerService.getCouponByType(type).then(coupons => this.searchCoupons = coupons);
//   }
//
//   searchByPrice(price: number): void {
//     this.customerService.getCouponByPrice(price).then(coupons => this.searchCoupons = coupons);
//   }
//
//   searchByDate(date: Date): void {
//     this.customerService.getCouponByDate(date).then(coupons => this.searchCoupons = coupons);
//   }
//
//   searchByID(id: number): void {
//     this.customerService.getCouponById(id).then(coupons => this.searchCoupons = coupons);
//   }
//
//   getCoupons(): void {
//     this.customerService
//       .getAllCoupons()
//       .then(coupons => this.coupons = coupons)
//       .then(coupons => this.coupons.map(coup => console.log(coup)))
//       .catch(error => this.error = error);
//   }
//
//   purchaseCoupon(id: number, event: any): void {
//     event.stopPropagation();
//     this.customerService
//       .purchaseCoupon(id)
//       .then(() => {
//         this.getCoupons();
//         this.selectedCoupon = null;
//       })
//       .catch(error => this.error = error);
//   }
//
//   ngOnInit(): void {
//     if (Cookie.get('clientType') === 'CUSTOMER') {
//       this.getCoupons();
//       this.currentCustName = Cookie.get('userName');
//     } else if (Cookie.get('clientType') !== null) {
//       this.router.navigate(['/', Cookie.get('clientType')]).then();
//     } else {
//       window.location.assign('http://localhost:4200/Login');
//     }
//   }
//
//   onSelect(coupon: Coupon): void {
//     this.selectedCoupon = coupon;
//     this.selectedMode = true;
//     this.regularMode = false;
//     this.addingCoupon = false;
//   }
//
//   logout(): void {
//     Cookie.deleteAll();
//     window.location.assign('http://localhost:4200/Login');
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedCoupon.id]).then();
//   }
// }
