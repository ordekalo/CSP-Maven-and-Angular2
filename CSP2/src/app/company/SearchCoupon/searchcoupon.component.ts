import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Coupon} from '../../baseobjects/Coupon';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-searchcoupon',
  templateUrl: './searchcoupon.component.html'
})
export class SearchCouponComponent implements OnInit {
// Coupons Attributes
  currentCompName: string;
  coupons: Coupon[];
  searchCoupons: Array<Coupon>;
  @Input() selectedCoupon: Coupon;
  selectedMode: boolean;
  regularMode = true;
  addingCoupon = false;
  // Error Handler
  error: any;

  // CTOR
  constructor(private router: Router,
              private companyService: CompanyService) {
  }

  searchByTitle(title: string): void {
    this.searchCoupons = this.coupons.filter(coupon => coupon.title === title);
  }

  searchByType(type: string): void {
    this.companyService.getCouponByType(type)
      .then(coupons => this.searchCoupons = coupons)
      .catch(error => this.error = error.text());
  }

  searchByPrice(price: number): void {
    this.companyService.getCouponByPrice(price)
      .then(coupons => this.searchCoupons = coupons)
      .catch(error => this.error = error.text());
  }

  searchByDate(date: Date): void {
    this.companyService.getCouponByDate(date)
      .then(coupons => this.searchCoupons = coupons)
      .catch(error => this.error = error.text());
  }

  searchByID(id: number): void {
    this.companyService.getCouponById(id)
      .then(coupons => this.searchCoupons = coupons)
      .catch(error => this.error = error.text());
  }

  // searchByID(id: number): void {
  //   console.log(id);
  //   this.searchCoupons = [];
  //   this.companyService.getCouponById(id)
  //     .then(res => {
  //       if (res.id != null) {
  //         this.searchCoupons.push(res)
  //       }
  //     });
  // }

  getCoupons(): void {
    this.companyService
      .getAllCoupons()
      .then(coupons => this.coupons = coupons)
      .then(coupons => this.coupons.map(coup => console.log(coup)))
      .catch(error => this.error = error.text());
  }

  updateCoupon(coupon: Coupon, event: any): void {
    this.companyService.putCoupon(coupon)
      .then()
      .catch(error => this.error = error.text());
    event.stopPropagation();
    this.selectedMode = false;
    this.regularMode = true;
    this.selectedCoupon = null;
  }

  deleteCoupon(coupon: Coupon, event: any): void {
    event.stopPropagation();
    this.companyService
      .deleteCoupon(coupon.id)
      .then(() => {
        this.coupons = this.coupons.filter(coup => coup !== coupon);
        if (this.selectedCoupon === coupon) {
          this.selectedCoupon = null;
        }
      })
      .catch(error => this.error = error.text());
  }

  ngOnInit(): void {
    if (Cookie.get('clientType') === 'COMPANY') {
      this.getCoupons();
      this.currentCompName = Cookie.get('userName');
    } else if (Cookie.get('clientType') !== null) {
      this.router.navigate(['/', Cookie.get('clientType')])
        .then()
        .catch(error => this.error = error.text());
    } else {
      window.location.assign('http://localhost:4200/Login');
    }
  }

  logout(): void {
    Cookie.deleteAll();
    window.location.assign('http://localhost:4200/Login');
  }

  onSelect(coupon: Coupon): void {
    this.selectedCoupon = coupon;
    this.selectedMode = true;
    this.regularMode = false;
    this.addingCoupon = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCoupon.id])
      .then()
      .catch(error => this.error = error.text());
  }
}
