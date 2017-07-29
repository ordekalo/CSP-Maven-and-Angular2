// ///<reference path="../company.service.ts"/>
// /**
//  * Created by Or Dekalo on 11/07/2017.
//  */
// import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import {Cookie} from 'ng2-cookies/ng2-cookies';
// import {Coupon} from '../../baseobjects/Coupon';
// import {CompanyService} from '../company.service';
// import {LoginService} from '../../Login/login.service';
//
// @Component({
//   selector: 'app-coupon-company',
//   templateUrl: './companyCoupons.component.html',
//   styleUrls: ['./companyCoupons.component.css']
// })
// export class CompanyComponent implements OnInit {
//   currentCompName: string;
//   coupons: Coupon[];
//   searchCoupons: Array<Coupon>;
//   @Input() newCoupon = new Coupon(1, '', new Date(), new Date(), 0, 'RESTURANTS', '', 0, '');
//   @Input() selectedCoupon: Coupon;
//   selectedMode: boolean;
//   regularMode = true;
//   addingCoupon = false;
//   error: any;
//
//   constructor(private router: Router,
//               private companyService: CompanyService) {
//   }
//
//   searchByTitle(title: string): void {
//     this.searchCoupons = this.coupons.filter(coupon => coupon.title === title);
//   }
//
//   searchByType(type: string): void {
//     this.companyService.getCouponByType(type).then(coupons => this.searchCoupons = coupons);
//   }
//
//   searchByPrice(price: number): void {
//     this.companyService.getCouponByPrice(price).then(coupons => this.searchCoupons = coupons);
//   }
//
//   searchByDate(date: Date): void {
//     this.companyService.getCouponByDate(date).then(coupons => this.searchCoupons = coupons);
//   }
//
//   searchByID(id: number): void {
//     this.companyService.getCouponById(id).then(coupons => this.searchCoupons = coupons);
//   }
//
//   // searchByID(id: number): void {
//   //   console.log(id);
//   //   this.searchCoupons = [];
//   //   this.companyService.getCouponById(id)
//   //     .then(res => {
//   //       if (res.id != null) {
//   //         this.searchCoupons.push(res)
//   //       }
//   //     });
//   // }
//
//   getCoupons(): void {
//     this.companyService
//       .getAllCoupons()
//       .then(coupons => this.coupons = coupons)
//       .then(coupons => this.coupons.map(coup => console.log(coup)))
//       .catch(error => this.error = error);
//   }
//
//   addCoupon(event: any): void {
//     event.stopPropagation();
//     if (this.coupons.find(coupon => coupon.id === this.newCoupon.id || this.newCoupon.id === null)) {
//       this.newCoupon.id = this.newCoupon.id + 1;
//       console.log('Coupon Already Exist');
//       return;
//     }
//     if (this.coupons.find(coupon => coupon.title === this.newCoupon.title || this.newCoupon.title === null)) {
//       console.log('Customer Already Exist');
//       return;
//     }
//     this.companyService.postCoupon(this.newCoupon).then(() => this.coupons.push(this.newCoupon))
//       .then(event.stopPropagation())
//       .then(() => this.newCoupon = new Coupon(1, '', new Date(), new Date(), 0, 'RESTURANTS', '', 0, ''));
//     this.selectedCoupon = null;
//   }
//
//   // close(savedCoupon: Coupon): void {
//   //   this.addingCoupon = false;
//   //   if (savedCoupon) {
//   //     this.getCoupons();
//   //   }
//   // }
//
//   updateCoupon(coupon: Coupon, event: any): void {
//     this.companyService.putCoupon(coupon).then();
//     event.stopPropagation();
//     this.selectedMode = false;
//     this.regularMode = true;
//     this.selectedCoupon = null;
//   }
//
//   deleteCoupon(coupon: Coupon, event: any): void {
//     event.stopPropagation();
//     this.companyService
//       .deleteCoupon(coupon.id)
//       .then(() => {
//         this.coupons = this.coupons.filter(coup => coup !== coupon);
//         if (this.selectedCoupon === coupon) {
//           this.selectedCoupon = null;
//         }
//       })
//       .catch(error => this.error = error);
//   }
//
//   ngOnInit(): void {
//     if (Cookie.get('clientType') === 'COMPANY') {
//       this.getCoupons();
//       this.currentCompName = Cookie.get('userName');
//     } else if (Cookie.get('clientType') !== null) {
//       this.router.navigate(['/', Cookie.get('clientType')]).then();
//     } else {
//       window.location.assign('http://localhost:4200/Login');
//     }
//   }
//
//   logout(): void {
//     Cookie.deleteAll();
//     window.location.assign('http://localhost:4200/Login');
//   }
//
//   onSelect(coupon: Coupon): void {
//     this.selectedCoupon = coupon;
//     this.selectedMode = true;
//     this.regularMode = false;
//     this.addingCoupon = false;
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedCoupon.id]).then();
//   }
// }
