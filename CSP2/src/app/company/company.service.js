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
    var CompanyService;
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
            let CompanyService = class CompanyService {
                constructor(http) {
                    this.http = http;
                    this.baseURL = 'http://localhost:8080/CSP/webapi/companyservice';
                }
                getHeaders() {
                    let headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Content-Type', 'application/json');
                    return headers;
                }
                handleError(error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                }
                postCoupon(coupon) {
                    return this.http
                        .post(`${this.baseURL}/createcoupon`, JSON.stringify(coupon), { headers: this.getHeaders() })
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
                }
                putCoupon(coupon) {
                    return this.http
                        .put(`${this.baseURL}/updatecoupon`, JSON.stringify(coupon), { headers: this.getHeaders() })
                        .toPromise()
                        .then(() => coupon)
                        .catch(this.handleError);
                }
                createCoupon(coupon) {
                    if (coupon.id) {
                        return this.putCoupon(coupon);
                    }
                    return this.postCoupon(coupon);
                }
                deleteCoupon(id) {
                    return this.http.delete(`${this.baseURL}/deletecoupon/${id}`, { headers: this.getHeaders() })
                        .toPromise()
                        .then(() => null)
                        .catch(this.handleError);
                }
                getAllCoupons() {
                    console.log('Getting All Coupons');
                    return this.http.get(`${this.baseURL}/getallcompanies`, { headers: this.getHeaders() }).toPromise()
                        .then(response => response.json().data)
                        .catch(this.handleError);
                }
                getCouponById(id) {
                    return this.ge().then(companies => companies.find(companie => companie.id === id));
                }
            };
            CompanyService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], CompanyService);
            exports_1("CompanyService", CompanyService);
        }
    }
});
//# sourceMappingURL=company.service.js.map