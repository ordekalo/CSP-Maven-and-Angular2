System.register(['angular2/core', 'angular2/router', "./admin.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, admin_service_1;
    var AdminCompaniesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (admin_service_1_1) {
                admin_service_1 = admin_service_1_1;
            }],
        execute: function() {
            let AdminCompaniesComponent = class AdminCompaniesComponent {
                constructor(router, adminservice) {
                    this.router = router;
                    this.adminservice = adminservice;
                    this.addingCompany = false;
                    this.showNgFor = false;
                }
                getCompanies() {
                    this.adminservice
                        .getAllCompanies()
                        .then(companies => this.companies = companies)
                        .catch(error => this.error = error);
                }
                addCompany() {
                    this.addingCompany = true;
                    this.selectedCompany = null;
                }
                close(savedCompany) {
                    this.addingCompany = false;
                    if (savedCompany) {
                        this.getCompanies();
                    }
                }
                deleteCompany(company, event) {
                    event.stopPropagation();
                    this.adminservice
                        .deleteCompany(company.id)
                        .then(res => {
                        this.companies = this.companies.filter(h => h !== company);
                        if (this.selectedCompany === company) {
                            this.selectedCompany = null;
                        }
                    })
                        .catch(error => this.error = error);
                }
                ngOnInit() {
                    this.getCompanies();
                }
                onSelect(company) {
                    this.selectedCompany = company;
                    this.addingCompany = false;
                }
                gotoDetail() {
                    this.router.navigate(['/detail', this.selectedCompany.id]);
                }
            };
            AdminCompaniesComponent = __decorate([
                core_1.Component({
                    selector: 'admin-companies',
                    templateUrl: './heroes.component.html',
                    styleUrls: ['./heroes.component.css']
                }), 
                __metadata('design:paramtypes', [router_1.Router, admin_service_1.AdminService])
            ], AdminCompaniesComponent);
            exports_1("AdminCompaniesComponent", AdminCompaniesComponent);
        }
    }
});
//# sourceMappingURL=adminCompanies.component.js.map