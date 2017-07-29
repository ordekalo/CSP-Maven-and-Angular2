import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AdminService} from '../admin.service';
import {Company} from '../../baseobjects/Company';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html'
})
export class AddCompanyComponent implements OnInit {
// Company Attributes
  companies = [];
  @Input() newCompany = new Company('', '', '', null);
  @Input() selectedCompany: Company;
  selectedModeComp: boolean;
  regularModeComp = true;
  addingCompany = false;

  // Error Handler
  error: any;

  // CTOR
  constructor(private router: Router,
              private adminservice: AdminService) {
  }

  getCompanies(): void {
    this.adminservice
      .getAllCompanies()
      .then(companies => this.companies = companies)
      .catch(error => this.error = error.text());
  }

  addCompany(event: any): void {
    if (this.companies.find(comp => comp.id === this.newCompany.id || this.newCompany.id === null)) {
      this.newCompany.id = this.newCompany.id + 1;
      alert('Company Already Exist');
      return;
    }
    if (this.companies.find(comp => comp.compName === this.newCompany.compName || this.newCompany.compName === null)) {
      alert('Customer Already Exist');
      return;
    }
    this.adminservice.postCompany(this.newCompany).then(() => this.companies.push(this.newCompany))
      .then(event.stopPropagation())
      .then(() => this.newCompany = new Company('', '', '', this.newCompany.id + 1))
      .catch(error => this.error = error.text());
    this.selectedCompany = null;
  }

  updateCompany(company: Company, event: any): void {
    // if (company.password === null || company.password === '') {
    //   console.log('No Password Was Entered');
    //   return;
    // };
    this.adminservice.putCompany(company)
      .then()
      .catch(error => this.error = error.text());
    event.stopPropagation();
    this.selectedModeComp = false;
    this.regularModeComp = true;
    this.selectedCompany = null;
    company.edit = false;
  }

  deleteCompany(company: Company, event: any): void {
    event.stopPropagation();
    this.adminservice
      .deleteCompany(company.id)
      .then(() => {
        this.companies = this.companies.filter(comp => comp !== company);
        if (this.selectedCompany === company) {
          this.selectedCompany = null;
        }
      })
      .catch(error => this.error = error.text());
  }

  onSelectComp(company: Company): void {
    company.edit = true;
    this.selectedCompany = company;
    this.selectedModeComp = true;
    this.regularModeComp = false;
    this.addingCompany = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCompany.id])
      .then()
      .catch(error => this.error = error.text());
  }

  //  On Page Load
  ngOnInit(): void {
    if (Cookie.get('clientType') === 'ADMIN') {
      this.getCompanies();
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
