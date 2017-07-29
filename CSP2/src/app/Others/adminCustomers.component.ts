// ///<reference path="../admin/admin.service.ts"/>
// import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
//
// import {Customer} from '../baseobjects/Customer';
// import {AdminService} from '../admin/admin.service';
//
//
// @Component({
//   selector: 'app-admin-customers',
//   templateUrl: './adminCustomers.component.html',
//   styleUrls: ['./adminCustomers.component.css']
// })
// export class AdminCustomersComponent implements OnInit {
//   customers = [];
//   searchCustomers = [];
//   customerByID: Customer;
//   @Input() newCustomer = new Customer(null, '', '');
//   @Input() selectedCustomer: Customer;
//   selectedMode: boolean;
//   regularMode = true;
//   addingCustomer = false;
//   error: any;
//   showNgFor = false;
//
//   constructor(private router: Router,
//               private adminservice: AdminService) {
//   }
//
//   searchByName(name: string): void {
//     this.searchCustomers = this.customers.filter(customer => customer.custName === name);
//   }
//
//   searchByID(id: string): void {
//     console.log(Number.parseInt(id));
//     this.searchCustomers = [];
//     this.adminservice.getCustomerById(Number.parseInt(id))
//       .then(res => {
//         if (res.id != null) {
//           this.searchCustomers.push(res);
//         }
//       });
//   }
//
//   getCustomers(): void {
//     this.adminservice
//       .getAllCustomers()
//       .then(customers => this.customers = customers)
//       .catch(error => this.error = error);
//   }
//
//   addCustomer(event: any): void {
//     if (this.customers.find(cust => cust.id === this.newCustomer.id || this.newCustomer.id === null)) {
//       this.newCustomer.id = this.newCustomer.id + 1;
//       console.log('Customer Already Exist');
//       return;
//     }
//     if (this.customers.find(cust => cust.custName === this.newCustomer.custName || this.newCustomer.custName === null)) {
//       console.log('Customer Already Exist');
//       return;
//     }
//     this.adminservice.postCustomer(this.newCustomer).then(() => this.customers.push(this.newCustomer))
//       .then(event.stopPropagation())
//       .then(() =>
//         this.newCustomer = new Customer(this.newCustomer.id + 1, '', ''));
//     this.selectedCustomer = null;
//   }
//
//   // close(savedCustomer: Customer): void {
//   //   this.addingCustomer = false;
//   //   if (savedCustomer) {
//   //     this.getCustomers();
//   //   }
//   // }
//
//   updateCustomer(customer: Customer, event: any): void {
//     this.adminservice.putCustomer(customer);
//     event.stopPropagation();
//     this.selectedMode = false;
//     this.regularMode = true;
//     this.selectedCustomer = null;
//     customer.edit = false;
//   }
//
//   deleteCustomer(customer: Customer, event: any): void {
//     event.stopPropagation();
//     this.adminservice
//       .deleteCustomer(customer.id)
//       .then(() => {
//         this.customers = this.customers.filter(h => h !== customer);
//         if (this.selectedCustomer === customer) {
//           this.selectedCustomer = null;
//         }
//       })
//       .catch(error => this.error = error);
//   }
//
//   ngOnInit(): void {
//     this.getCustomers();
//   }
//
//   onSelect(customer: Customer): void {
//     this.selectedCustomer = customer;
//     customer.edit = true;
//     this.selectedMode = true;
//     this.regularMode = false;
//     this.addingCustomer = false;
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedCustomer.id]);
//   }
// }
