import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Coupon} from '../../baseobjects/Coupon';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html'
})
export class AddCouponComponent implements OnInit {
// Coupons Attributes
  currentCompName: string;
  coupons: Coupon[];
  @Input() newCoupon = new Coupon(1, '', new Date(), new Date(), 0, 'RESTURANTS', '', 0, '');
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

  getCoupons(): void {
    this.companyService
      .getAllCoupons()
      .then(coupons => this.coupons = coupons)
      .then(coupons => this.coupons.map(coup => console.log(coup)))
      .catch(error => this.error = error.text());
  }

  addCoupon(event: any): void {
    event.stopPropagation();
    if (this.coupons.find(coupon => coupon.id === this.newCoupon.id || this.newCoupon.id === null)) {
      this.newCoupon.id = this.newCoupon.id + 1;
      alert('Coupon Already Exist');
      return;
    }
    if (this.coupons.find(coupon => coupon.title === this.newCoupon.title || this.newCoupon.title === null)) {
      alert('Customer Already Exist');
      return;
    }
    this.companyService.postCoupon(this.newCoupon).then(() => this.coupons.push(this.newCoupon))
      .then(event.stopPropagation())
      .then(() => this.newCoupon = new Coupon(1, '', new Date(), new Date(), 0, 'RESTURANTS', '', 0, ''))
      .catch(error => this.error = error.text());
    this.selectedCoupon = null;
  }

  // close(savedCoupon: Coupon): void {
  //   this.addingCoupon = false;
  //   if (savedCoupon) {
  //     this.getCoupons();
  //   }
  // }

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
