// import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
//
// import {AdminService} from '../admin/admin.service';
// import {Company} from '../baseobjects/Company';
// import {Cookie} from 'ng2-cookies/ng2-cookies';
//
// @Component
// ({
//   selector: 'app-admin-companies',
//   templateUrl: './adminCompanies.component.html',
//   styleUrls: ['./adminCompanies.component.css']
// })
// export class AdminCompaniesComponent implements OnInit {
//   companies = [];
//   searchCompanies = [];
//   companyByID: Company;
//   @Input() newCompany = new Company('', '', '', null);
//   @Input() selectedCompany: Company;
//   selectedMode: boolean;
//   regularMode = true;
//   addingCompany = false;
//   error: any;
//
//   constructor(private router: Router,
//               private adminservice: AdminService) {
//   }
//
//   searchByName(name: string): void {
//     this.searchCompanies = this.companies.filter(company => company.compName === name);
//   }
//
//   searchByID(id: number): void {
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
//   // close(savedCompany: Company): void {
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
//     this.selectedMode = false;
//     this.regularMode = true;
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
//   ngOnInit(): void {
//     if (Cookie.get('clientType') === 'ADMIN') {
//       this.getCompanies();
//     } else {
//       window.location.assign('http://localhost:4200/Login');
//     }
//   }
//
//   onSelect(company: Company): void {
//     company.edit = true;
//     this.selectedCompany = company;
//     this.selectedMode = true;
//     this.regularMode = false;
//     this.addingCompany = false;
//   }
//
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedCompany.id]);
//   }
// }
