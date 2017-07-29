/**
 * Created by Or Dekalo on 11/07/2017.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Coupon} from '../baseobjects/Coupon';
import 'rxjs/add/operator/toPromise';
import {Cookie} from 'ng2-cookies/ng2-cookies';


@Injectable()
export class CustomerService {
  private baseURL = 'http://localhost:8080/CSP/webapi/customerservice';

  constructor(private http: Http) {
  }

  private static getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    alert(error.text());
    return Promise.reject(error.message || error);
  }

  purchaseCoupon(id: number): Promise<void> {
    return this.http
      .post(`${this.baseURL}/purchasecoupon/${id}/${Cookie.get('userName')}/${Cookie.get('password')}/${Cookie.get('clientType')}`, {headers: CustomerService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getAllCoupons(): Promise<Array<Coupon>> {
    console.log('Getting All Coupons');
    return this.http.get(`${this.baseURL}/getallpurchasedcoupons/${Cookie.get('userName')}/${Cookie.get('password')}/${Cookie.get('clientType')}`, {headers: CustomerService.getHeaders()})
      .toPromise()
      .then(response => response.json() as Coupon[])
      .catch(this.handleError);
  }

  getCouponById(id: number): Promise<Array<Coupon>> {
    console.log('Getting Coupons By ID - ' + id);
    return this.getAllCoupons()
      .then(coupons => coupons.filter(coupon => coupon.id <= id))
      .then(coupons => coupons.filter(coupon => coupon.id >= id));
  }

  getCouponByPrice(price: number): Promise<Array<Coupon>> {
    console.log('Getting Coupons By Price - ' + price);
    return this.getAllCoupons().then(coupons => coupons.filter(coupon => coupon.price <= price));
  }

  getCouponByType(type: string): Promise<Array<Coupon>> {
    console.log('Getting Coupons By Type - ' + type);
    return this.getAllCoupons().then(coupons => coupons.filter(coupon => coupon.type === type));
  }

  getCouponByDate(date: Date): Promise<Array<Coupon>> {
    console.log('Getting Coupons By Date - ' + date);
    return this.getAllCoupons().then(coupons => coupons.filter(coupon => coupon.endDate <= date));
  }
}
