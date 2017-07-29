System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AdminService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let AdminService = class AdminService {
                constructor(http) {
                    this.http = http;
                    this.baseURL = 'http://localhost:8080/CSP/webapi/adminservice';
                }
                getHeaders() {
                    let headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Content-Type', 'application/json');
                    return headers;
                }
                // Add new Company
                postCompany(company) {
                    return this.http
                        .post(`${this.baseURL}/createcompany`, JSON.stringify(company), { headers: this.getHeaders() })
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
                }
                // Update existing Company
                putCompany(company) {
                    return this.http
                        .put(`${this.baseURL}/updatecompany`, JSON.stringify(company), { headers: this.getHeaders() })
                        .toPromise()
                        .then(() => company)
                        .catch(this.handleError);
                }
                // Add new Customer
                postCustomer(customer) {
                    return this.http
                        .post(`${this.baseURL}/createcustomer`, JSON.stringify(customer), { headers: this.getHeaders() })
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
                }
                // Update existing Customer
                putCustomer(customer) {
                    return this.http
                        .put(`${this.baseURL}/updatecustomer`, JSON.stringify(customer), { headers: this.getHeaders() })
                        .toPromise()
                        .then(() => customer)
                        .catch(this.handleError);
                }
                createCompany(company) {
                    if (company.id) {
                        return this.putCompany(company);
                    }
                    return this.postCompany(company);
                }
                deleteCompany(id) {
                    return this.http.delete(`${this.baseURL}/deletecompany/${id}`, { headers: this.getHeaders() })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
                }
                getCompanyById(id) {
                    return this.getAllCompanies().then(companies => companies.find(companie => companie.id === id));
                }
                getAllCompanies() {
                    console.log('Getting All Companies');
                    return this.http.get(`${this.baseURL}/getallcompanies`, { headers: this.getHeaders() }).toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
                }
                createCustomer(customer) {
                    if (customer.id) {
                        return this.putCustomer(customer);
                    }
                    return this.postCustomer(customer);
                }
                deleteCustomer(id) {
                    return this.http.delete(`${this.baseURL}/deletecustomer/${id}`, { headers: this.getHeaders() })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
                }
                getCustomerById(id) {
                    return this.getAllCustomers()
                        .then(customers => customers.find(customer => customer.id === id));
                }
                getAllCustomers() {
                    console.log('Getting All Companies');
                    return this.http.get(`${this.baseURL}/getallcustomers`, { headers: this.getHeaders() }).toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
                }
                handleError(error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                }
            };
            AdminService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], AdminService);
            exports_1("AdminService", AdminService);
        }
    }
});
//# sourceMappingURL=admin.service.js.map