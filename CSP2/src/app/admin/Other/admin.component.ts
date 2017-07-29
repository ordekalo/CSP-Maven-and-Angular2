// ///<reference path="../admin.service.ts"/>
// import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import {Cookie} from 'ng2-cookies/ng2-cookies';
// import {Customer} from '../../baseobjects/Customer';
// import {AdminService} from '../admin.service';
// import {Company} from '../../baseobjects/Company';
//
//
// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {
//   // Customer Attributes:
//   customers = [];
//   searchCustomers = [];
//   customerByID: Customer;
//   @Input() newCustomer = new Customer(null, '', '');
//   @Input() selectedCustomer: Customer;
//   selectedModeCust: boolean;
//   regularModeCust = true;
//   addingCustomer = false;
//   // Company Attributes
//   companies = [];
//   searchCompanies = [];
//   companyByID: Company;
//   @Input() newCompany = new Company('', '', '', null);
//   @Input() selectedCompany: Company;
//   selectedModeComp: boolean;
//   regularModeComp = true;
//   addingCompany = false;
//   // Error Handler
//   error: any;
//
//   // CTOR
//   constructor(private router: Router,
//               private adminservice: AdminService) {
//   }
//
//   // Customer Methods
//   searchCustByName(name: string): void {
//     this.searchCustomers = this.customers.filter(customer => customer.custName === name);
//   }
//
//   searchCustByID(id: string): void {
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
//   // closeCust(savedCustomer: Customer): void {
//   //   this.addingCustomer = false;
//   //   if (savedCustomer) {
//   //     this.getCustomers();
//   //   }
//   // }
//
//   updateCustomer(customer: Customer, event: any): void {
//     this.adminservice.putCustomer(customer).then();
//     event.stopPropagation();
//     this.selectedModeCust = false;
//     this.regularModeCust = true;
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
//   onSelectCust(customer: Customer): void {
//     this.selectedCustomer = customer;
//     customer.edit = true;
//     this.selectedModeCust = true;
//     this.regularModeCust = false;
//     this.addingCustomer = false;
//   }
//
//   // gotoDetailCust(): void {
//   //   this.router.navigate(['/detail', this.selectedCustomer.id]).then();
//   // }
//
//   // Company Methods
//
//   searchCompByName(name: string): void {
//     this.searchCompanies = this.companies.filter(company => company.compName === name);
//   }
//
//   searchCompByID(id: number): void {
//     this.adminservice.getCompanyByID(id).then(companies => this.searchCompanies = companies);
//   }
//
//   getCompanies(): void {
//     this.adminservice
//       .getAllCompanies()
//       .then(companies => this.companies = companies)
//       .catch(error => this.error = error);
//   }
//
//   addCompany(event: any): void {
//     if (this.companies.find(comp => comp.id === this.newCompany.id || this.newCompany.id === null)) {
//       this.newCompany.id = this.newCompany.id + 1;
//       console.log('Company Already Exist');
//       return;
//     }
//     if (this.companies.find(comp => comp.compName === this.newCompany.compName || this.newCompany.compName === null)) {
//       console.log('Customer Already Exist');
//       return;
//     }
//     this.adminservice.postCompany(this.newCompany).then(() => this.companies.push(this.newCompany))
//       .then(event.stopPropagation())
//       .then(() => this.newCompany = new Company('', '', '', this.newCompany.id + 1));
//     this.selectedCompany = null;
//   }
//
//   // closeComp(savedCompany: Company): void {
//   //   this.addingCompany = false;
//   //   if (savedCompany) {
//   //     this.getCompanies();
//   //   }
//   // }
//
//   updateCompany(company: Company, event: any): void {
//     // if (company.password === null || company.password === '') {
//     //   console.log('No Password Was Entered');
//     //   return;
//     // };
//     this.adminservice.putCompany(company).then();
//     event.stopPropagation();
//     this.selectedModeComp = false;
//     this.regularModeComp = true;
//     this.selectedCompany = null;
//     company.edit = false;
//   }
//
//   deleteCompany(company: Company, event: any): void {
//     event.stopPropagation();
//     this.adminservice
//       .deleteCompany(company.id)
//       .then(() => {
//         this.companies = this.companies.filter(comp => comp !== company);
//         if (this.selectedCompany === company) {
//           this.selectedCompany = null;
//         }
//       })
//       .catch(error => this.error = error);
//   }
//
//   onSelectComp(company: Company): void {
//     company.edit = true;
//     this.selectedCompany = company;
//     this.selectedModeComp = true;
//     this.regularModeComp = false;
//     this.addingCompany = false;
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedCompany.id]).then();
//   }
//
// //  On Page Load
//   ngOnInit(): void {
//     if (Cookie.get('clientType') === 'ADMIN') {
//       this.getCustomers();
//       this.getCompanies();
//     } else if (Cookie.get('clientType') !== null) {
//       this.router.navigate(['/', Cookie.get('clientType')]).then();
//     } else {
//       window.location.assign('http://localhost:4200/Login');
//     }
//   }
//
//   logout(): void {
//     Cookie.deleteAll();
//     window.location.assign('http://localhost:4200/Login');
//   }
// }
