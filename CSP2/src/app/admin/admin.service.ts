import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Company} from '../baseobjects/Company';
import {Customer} from '../baseobjects/Customer';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {
  private baseURL = 'http://localhost:8080/CSP/webapi/adminservice';

  constructor(private http: Http) {
  }

  private static getHeaders() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  // Add new Company
  postCompany(company: Company): Promise<Company> {
    return this.http
      .post(`${this.baseURL}/createcompany`, JSON.stringify(company), {headers: AdminService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Update existing Company
  putCompany(company: Company): Promise<Company> {
    console.log(JSON.stringify(company));
    return this.http
      .put(`${this.baseURL}/updatecompany/`, JSON.stringify(company), {headers: AdminService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Add new Customer
  postCustomer(customer: Customer): Promise<Customer> {

    return this.http
      .post(`${this.baseURL}/createcustomer`, JSON.stringify(customer), {headers: AdminService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Update existing Customer
  putCustomer(customer: Customer): Promise<Customer> {
    return this.http
      .put(`${this.baseURL}/updatecustomer`, JSON.stringify(customer), {headers: AdminService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteCompany(id: number): Promise<void> {
    console.log('deleteCompany');
    return this.http.delete(`${this.baseURL}/deletecompany/${id}`, {headers: AdminService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getCompanyByID(id: number): Promise<Array<Company>> {
    console.log('Getting Company By ID - ' + id);
    return this.getAllCompanies()
      .then(coupons => coupons.filter(company => company.id <= id))
      .then(coupons => coupons.filter(company => company.id >= id));
  }

  getAllCompanies(): Promise<Array<Company>> {
    console.log('Getting All Companies');
    return this.http.get(`${this.baseURL}/getallcompanies`, {headers: AdminService.getHeaders()}).toPromise()
      .then(response => response.json() as Company[])
      .catch(this.handleError);
  }

  // saveCustomer(customer: Customer): Promise<Customer> {
  //   console.log('saveCustomer');
  //   if (customer.id) {
  //     return this.putCustomer(customer);
  //   }
  //   return this.postCustomer(customer);
  // }

  deleteCustomer(id: number): Promise<void> {
    console.log('deleteCustomer');
    return this.http.delete(`${this.baseURL}/deletecustomer/${id}`, {headers: AdminService.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getCustomerById(id: number): Promise<Customer> {
    console.log('Get Customer By ID');
    return this.http.get(`${this.baseURL}/getcustomer/${id}`)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  getAllCustomers(): Promise<Array<Customer>> {
    console.log('Getting All Customers');
    return this.http.get(`${this.baseURL}/getallcustomers`, {headers: AdminService.getHeaders()}).toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    alert(error.text());
    return Promise.reject(error.message || error);
  }
}
