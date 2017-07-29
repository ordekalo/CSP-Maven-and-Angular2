import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AdminService} from '../admin.service';
import {Customer} from '../../baseobjects/Customer';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html'
})
export class SearchCustomerComponent implements OnInit {
// Customer Attributes:
  customers = [];
  searchCustomers = [];
  customerByID: Customer;
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

  searchCustByName(name: string): void {
    this.searchCustomers = this.customers.filter(customer => customer.custName === name);
  }

  searchCustByID(id: string): void {
    this.searchCustomers = [];
    this.adminservice.getCustomerById(Number.parseInt(id))
      .then(res => {
        if (res.id != null) {
          this.searchCustomers.push(res);
        }
      })
      .catch(error => this.error = error.text());
  }

  getCustomers(): void {
    this.adminservice
      .getAllCustomers()
      .then(customers => this.customers = customers)
      .catch(error => this.error = error.text());
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCustomer.id])
      .then()
      .catch(error => this.error = error.text());
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
