import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {User} from '../baseobjects/User';
import {Cookie} from 'ng2-cookies/ng2-cookies';


@Injectable()
export class LoginService {
  private baseURL = 'http://localhost:8080/CSP/webapi';

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
    alert('Something Is Wrong. Try Again');
    return Promise.reject(error.message || error);
  }

  loginFilter(user: User): Promise<User> {
    return this.http
      .post(`${this.baseURL}/controlpanel/login/${user.userName}/${user.password}/${user.clientType}`, {headers: LoginService.getHeaders()})
      .toPromise()
      .then(resp => resp.json() as User)
      .catch(this.handleError);
  }

  logout(): void {
    Cookie.deleteAll();
    window.location.assign('http://localhost:4200/Login');
  }

}
