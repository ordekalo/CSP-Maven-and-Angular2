import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AdminService} from '../admin.service';
import {Customer} from '../../baseobjects/Customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html'
})
export class AddCustomerComponent implements OnInit {
// Customer Attributes:
  customers = [];
  @Input() newCustomer = new Customer(null, '', '');
  @Input() selectedCustomer: Customer;
  selectedModeCust: boolean;
  regularModeCust = true;
  addingCustomer = false;

  // Error Handler
  error: any;

  // CTOR
  constructor(private router: Router,
              private adminservice: AdminService) {
  }

  getCustomers(): void {
    this.adminservice
      .getAllCustomers()
      .then(customers => this.customers = customers)
      .catch(error => this.error = error.text());
  }

  addCustomer(event: any): void {
    if (this.customers.find(cust => cust.id === this.newCustomer.id || this.newCustomer.id === null)) {
      this.newCustomer.id = this.newCustomer.id + 1;
      alert('Customer Already Exist');
      return;
    }
    if (this.customers.find(cust => cust.custName === this.newCustomer.custName || this.newCustomer.custName === null)) {
      alert('Customer Already Exist');
      return;
    }
    this.adminservice.postCustomer(this.newCustomer).then(() => this.customers.push(this.newCustomer))
      .then(event.stopPropagation())
      .then(() =>
        this.newCustomer = new Customer(this.newCustomer.id + 1, '', ''))
      .catch(error => this.error = error.text());
    this.selectedCustomer = null;
  }

  updateCustomer(customer: Customer, event: any): void {
    this.adminservice.putCustomer(customer)
      .then()
      .catch(error => this.error = error.text());
    event.stopPropagation();
    this.selectedModeCust = false;
    this.regularModeCust = true;
    this.selectedCustomer = null;
    customer.edit = false;
  }

  deleteCustomer(customer: Customer, event: any): void {
    event.stopPropagation();
    this.adminservice
      .deleteCustomer(customer.id)
      .then(() => {
        this.customers = this.customers.filter(h => h !== customer);
        if (this.selectedCustomer === customer) {
          this.selectedCustomer = null;
        }
      })
      .catch(error => this.error = error.text());
  }

  onSelectCust(customer: Customer): void {
    this.selectedCustomer = customer;
    customer.edit = true;
    this.selectedModeCust = true;
    this.regularModeCust = false;
    this.addingCustomer = false;
  }

  //  On Page Load
  ngOnInit(): void {
    if (Cookie.get('clientType') === 'ADMIN') {
      this.getCustomers();
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
}
