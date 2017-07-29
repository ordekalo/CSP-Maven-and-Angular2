import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Coupon} from '../../baseobjects/Coupon';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-purchasecoupon',
  templateUrl: './purchasecoupon.component.html'
})
export class PurchaseCouponComponent implements OnInit {
// Coupons Attributes
  currentCustName: string;
  coupons: Coupon[];
  @Input() selectedCoupon: Coupon;
  selectedMode: boolean;
  regularMode = true;
  addingCoupon = false;

  // Error Handler
  error: any;

  // CTOR
  constructor(private router: Router,
              private customerService: CustomerService) {
  }

  getCoupons(): void {
    this.customerService
      .getAllCoupons()
      .then(coupons => this.coupons = coupons)
      .then(coupons => this.coupons.map(coup => console.log(coup)))
      .catch(error => this.error = error.text());
  }

  purchaseCoupon(id: number, event: any): void {
    event.stopPropagation();
    this.customerService
      .purchaseCoupon(id)
      .then(() => {
        this.getCoupons();
        this.selectedCoupon = null;
      })
      .catch(error => this.error = error.text());
  }

  ngOnInit(): void {
    if (Cookie.get('clientType') === 'CUSTOMER') {
      this.getCoupons();
      this.currentCustName = Cookie.get('userName');
    } else if (Cookie.get('clientType') !== null) {
      this.router.navigate(['/', Cookie.get('clientType')])
        .then()
        .catch(error => this.error = error.text());
    } else {
      window.location.assign('http://localhost:4200/Login');
    }
  }

  onSelect(coupon: Coupon): void {
    this.selectedCoupon = coupon;
    this.selectedMode = true;
    this.regularMode = false;
    this.addingCoupon = false;
  }

  logout(): void {
    Cookie.deleteAll();
    window.location.assign('http://localhost:4200/Login');
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCoupon.id])
      .then()
      .catch(error => this.error = error.text());
  }
}
