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
export class CompanyService {
  private baseURL = 'http://localhost:8080/CSP/webapi/companyservice';

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

  postCoupon(coupon: Coupon): Promise<Coupon> {
    return this
      .http
      .post(`${this.baseURL}/createcoupon/${Cookie.get('userName')}/${Cookie.get('password')}/${Cookie.get('clientType')}/`, JSON.stringify(coupon), {headers: CompanyService.getHeaders()})
      .toPromise()
      .then(() => coupon)
      .catch(this.handleError);
  }

  putCoupon(coupon: Coupon): Promise<Coupon> {

    return this
      .http
      .put(`${this.baseURL}/updatecoupon/${Cookie.get('userName')}/${Cookie.get('password')}/${Cookie.get('clientType')}`, JSON.stringify(coupon), {headers: CompanyService.getHeaders()})
      .toPromise()
      .then(() => coupon)
      .catch(this.handleError);
  }

  deleteCoupon(id: number): Promise<void> {
    return this
      .http
      .delete(`${this.baseURL}/deletecoupon/${id}/${Cookie.get('userName')}/${Cookie.get('password')}/${Cookie.get('clientType')}`, {headers: CompanyService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getAllCoupons(): Promise<Array<Coupon>> {
    console.log('Getting All Coupons');
    return this
      .http
      .get(`${this.baseURL}/getallcoupons/${Cookie.get('userName')}/${Cookie.get('password')}/${Cookie.get('clientType')}`
        , {headers: CompanyService.getHeaders()}).toPromise()
      .then(response => response.json() as Coupon[])
      .catch(this.handleError);
  }

  // getCouponById(id: number): Promise<Coupon> {
  //   console.log('Get Coupon By ID - ' + id);
  //   return this.http.get(`${this.baseURL}/getcoupon/${id}`)
  //     .toPromise()
  //     .then(response => response.json() as Coupon)
  //     .catch(this.handleError);
  // }
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
