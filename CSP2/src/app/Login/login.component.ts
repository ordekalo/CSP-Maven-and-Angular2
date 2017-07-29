import {Component, Input} from '@angular/core';
import {LoginService} from './login.service';
import {User} from '../baseobjects/User';
import {Cookie} from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() userLogin = new User('', '', '');
  error: any;

  constructor(private loginService: LoginService) {
  }

  login(user: User, event: any): void {
    event.stopPropagation();
    this.loginService.loginFilter(user)
      .then(() => {
        // console.log(user.userName);
        Cookie.set('userName', user.userName);
        // console.log(user.password);
        Cookie.set('password', user.password);
        // console.log(user.clientType);
        Cookie.set('clientType', user.clientType);
      })
      .then(() => {
        if (Cookie.get('clientType') === 'ADMIN') {
          window.location.assign('http://localhost:4200/ADMIN');
        } else if (Cookie.get('clientType') === 'COMPANY') {
          window.location.assign('http://localhost:4200/COMPANY');
        } else if (Cookie.get('clientType') === 'CUSTOMER') {
          window.location.assign('http://localhost:4200/CUSTOMER');
        } else {
          window.location.assign('http://localhost:4200/Login');
        }
      })
      .catch(error => this.error = error.text());
  }

  logout(): void {
    Cookie.deleteAll();
    window.location.assign('http://localhost:4200/Login');
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedCoupon.id]);
  // }
}
