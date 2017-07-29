webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);", ""]);

// module
exports.push([module.i, ".btn { display: inline-block; *display: inline; *zoom: 1; padding: 4px 10px 4px; margin-bottom: 0; font-size: 13px; line-height: 18px; color: #333333; text-align: center;text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75); vertical-align: middle; background-color: #f5f5f5; background-image: linear-gradient(top, #ffffff, #e6e6e6); background-repeat: repeat-x; -webkit-filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); filter: progid:dximagetransform.microsoft.gradient(startColorstr=#ffffff, endColorstr=#e6e6e6, GradientType=0); border-color: #e6e6e6 #e6e6e6 #e6e6e6; border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25); border: 1px solid #e6e6e6; border-radius: 4px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); cursor: pointer; *margin-left: .3em; }\r\n.btn:hover, .btn:active, .btn.active, .btn.disabled, .btn[disabled] { background-color: #e6e6e6; }\r\n.btn-large { padding: 9px 14px; font-size: 15px; line-height: normal; border-radius: 5px; }\r\n.btn:hover { color: #333333; text-decoration: none; background-color: #e6e6e6; background-position: 0 -15px; transition: background-position 0.1s linear; }\r\n.btn-primary, .btn-primary:hover { text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); color: #ffffff; }\r\n.btn-primary.active { color: rgba(255, 255, 255, 0.75); }\r\n.btn-primary { background-color: #4a77d4; background-image: linear-gradient(top, #6eb6de, #4a77d4); background-repeat: repeat-x; -webkit-filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0); filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  border: 1px solid #3762bc; text-shadow: 1px 1px 1px rgba(0,0,0,0.4); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); }\r\n.btn-primary:hover, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] { -webkit-filter: none; filter: none; background-color: #4a77d4; }\r\n.btn-block { width: 100%; display:block; }\r\n\r\n* { -ms-box-sizing:border-box; -o-box-sizing:border-box; box-sizing:border-box; }\r\n\r\nhtml { width: 100%; height:100%; overflow:hidden; }\r\n\r\nbody {\r\n  width: 100%;\r\n  height:100%;\r\n  font-family: 'Open Sans', sans-serif;\r\n  background: #092756;\r\n  background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );\r\n}\r\n.login {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin: -150px 0 0 -150px;\r\n  width:300px;\r\n  height:300px;\r\n}\r\n.login h1 { color: #fff; text-shadow: 0 0 10px rgba(0,0,0,0.3); letter-spacing:1px; text-align:center; }\r\n\r\ninput {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  background: rgba(0,0,0,0.3);\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);\r\n  transition: box-shadow .5s ease;\r\n}\r\ninput:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }\r\n\r\nselect {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  background: rgba(0,0,0,0.3);\r\n  border: none;\r\n  outline: none;\r\n  padding: 10px;\r\n  font-size: 13px;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);\r\n  transition: box-shadow .5s ease;\r\n}\r\nselect:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4), 0 1px 1px rgba(255,255,255,0.2); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <h1>Login</h1>\r\n\r\n  <form (submit)=\"login(userLogin, $event)\">\r\n    <select class=\"input\" name=\"clientType\" id=\"clientType\" required=\"required\" [(ngModel)]=\"userLogin.clientType\">\r\n      <option value=\"\" disabled selected>Select your client type</option>\r\n      <option>ADMIN</option>\r\n      <option>COMPANY</option>\r\n      <option>CUSTOMER</option>\r\n    </select>\r\n    <input type=\"text\" class=\"input\" id=\"userName\" name=\"userName\" placeholder=\"Username\" required=\"required\"\r\n           [(ngModel)]=\"userLogin.userName\"/>\r\n    <input type=\"password\" class=\"input\" id=\"password\" name=\"password\" placeholder=\"Password\" required=\"required\"\r\n           [(ngModel)]=\"userLogin.password\"/>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-block btn-large\" id=\"loginBtn\">Let me in.</button>\r\n  </form>\r\n  <br>\r\n  <div id=\"errorDIv\" class=\"alert alert-danger\" style=\"display:none\" *ngIf=\"error\">{{error}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/Login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseobjects_User__ = __webpack_require__("../../../../../src/app/baseobjects/User.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.userLogin = new __WEBPACK_IMPORTED_MODULE_3__baseobjects_User__["a" /* User */]('', '', '');
    }
    LoginComponent.prototype.login = function (user, event) {
        var _this = this;
        event.stopPropagation();
        this.loginService.loginFilter(user)
            .then(function () { return null; })
            .catch(function (error) { return _this.error = error; });
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userLogin", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-login',
        template: __webpack_require__("../../../../../src/app/Login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/Login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8080/CSP/webapi';
    }
    LoginService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    LoginService.prototype.loginFilter = function (user) {
        // if (user.clientType = 'ADMIN') {
        //   return this.http
        //     .put(`${this.baseURL}/adminservice/login/${user.userName}/${user.password}/${user.clientType}`, {headers: this.getHeaders()})
        //     .toPromise()
        //     .then(() => window.location.assign(`http://localhost:4200/Admin_Customers`))
        //     .catch(this.handleError);
        // } else if (user.clientType = 'COMPANY') {
        //   return this.http
        //     .post(`${this.baseURL}/companyservice/login/${user.userName}/${user.password}/${user.clientType}`, {headers: this.getHeaders()})
        //     .toPromise()
        //     .then(() => window.location.href = 'http://localhost:4200/CompanyPanel')
        //     .catch(this.handleError);
        // } else if (user.clientType = 'CUSTOMER') {
        //   return this.http
        //     .post(`${this.baseURL}/customerservice/login/${user.userName}/${user.password}/${user.clientType}`, {headers: this.getHeaders()})
        //     .toPromise()
        //     .then(() => window.location.href = 'http://localhost:4200/CustomerPanel')
        //     .catch(this.handleError);
        // } else {
        //   alert('hey');
        // }
        return this.http
            .post(this.baseURL + "/adminservice/login/" + user.userName + "/" + user.password + "/" + user.clientType, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    LoginService.prototype.logoutFilter = function (user) {
        return this.http
            .get("http://localhost:8080/CSP/Logout", { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8080/CSP/webapi/adminservice';
    }
    AdminService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        // headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        return headers;
    };
    // Add new Company
    AdminService.prototype.postCompany = function (company) {
        return this.http
            .post(this.baseURL + "/createcompany", JSON.stringify(company), { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // Update existing Company
    AdminService.prototype.putCompany = function (company) {
        console.log(JSON.stringify(company));
        return this.http
            .put(this.baseURL + "/updatecompany/", JSON.stringify(company), { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // Add new Customer
    AdminService.prototype.postCustomer = function (customer) {
        return this.http
            .post(this.baseURL + "/createcustomer", JSON.stringify(customer), { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // Update existing Customer
    AdminService.prototype.putCustomer = function (customer) {
        return this.http
            .put(this.baseURL + "/updatecustomer", JSON.stringify(customer), { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AdminService.prototype.deleteCompany = function (id) {
        console.log('deleteCompany');
        return this.http.delete(this.baseURL + "/deletecompany/" + id, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AdminService.prototype.getCompanyByID = function (id) {
        console.log('Getting Company By ID - ' + id);
        return this.getAllCompanies()
            .then(function (coupons) { return coupons.filter(function (company) { return company.id <= id; }); })
            .then(function (coupons) { return coupons.filter(function (company) { return company.id >= id; }); });
    };
    AdminService.prototype.getAllCompanies = function () {
        console.log('Getting All Companies');
        return this.http.get(this.baseURL + "/getallcompanies", { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // saveCustomer(customer: Customer): Promise<Customer> {
    //   console.log('saveCustomer');
    //   if (customer.id) {
    //     return this.putCustomer(customer);
    //   }
    //   return this.postCustomer(customer);
    // }
    AdminService.prototype.deleteCustomer = function (id) {
        console.log('deleteCustomer');
        return this.http.delete(this.baseURL + "/deletecustomer/" + id, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AdminService.prototype.getCustomerById = function (id) {
        console.log('Get Customer By ID');
        return this.http.get(this.baseURL + "/getcustomer/" + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminService.prototype.getAllCustomers = function () {
        console.log('Getting All Customers');
        return this.http.get(this.baseURL + "/getallcustomers", { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AdminService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ "../../../../../src/app/admin/adminCompanies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  background-color: rgb(205, 202, 209);\r\n  color: blue;\r\n}\r\n.companies {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.companies .badge .text{\r\n  position: relative;\r\n}\r\n.companies .comp-name{\r\n  position: fixed;\r\n  text-orientation: mixed;\r\n  height: 20px;\r\n}\r\n.companies td {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .5em;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.companies td:hover {\r\n  color: #607D8B;\r\n  color: rgb(0,120,215);\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.companies td.selected:hover {\r\n  /*background-color: #BBD8DC !important;*/\r\n  color: #039be5;\r\n}\r\n.companies .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.companies .badge {\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  background-color: rgb(0,120,215);\r\n  line-height: 1em;\r\n  position: relative;\r\n  border-radius: 8px 0 0 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n.error {color:red;\r\n}\r\n.companies .update-button{\r\n  background-color: limegreen;\r\n  color:white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n.companies .delete-button{\r\n  background-color: rgb(216,59,1);\r\n  background-color: rgb(216,59,2);\r\n  color:white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/adminCompanies.component.html":
/***/ (function(module, exports) {

module.exports = "<a>\r\n  <h4>Add New Company</h4>\r\n  <table width=\"470px\" class=\"companies\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>NAME</th>\r\n      <th>EMAIL</th>\r\n      <th>PASSWORD</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td align=\"center\"><input type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"newCompany.id\" placeholder=\"Enter ID\">\r\n      </td>\r\n      <td align=\"center\"><input size=\"10\" [(ngModel)]=\"newCompany.compName\" placeholder=\"Enter Name\"></td>\r\n      <td align=\"center\"><input type=\"email\" size=\"20\" [(ngModel)]=\"newCompany.email\" placeholder=\"Enter Email\"></td>\r\n      <td align=\"center\"><input size=\"15\" type=\"password\" [(ngModel)]=\"newCompany.password\"\r\n                                placeholder=\"Enter Password\"></td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"addCompany($event)\">Create</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div id=\"search-component\">\r\n    <h4>Search Company</h4>\r\n    <input #searchBox id=\"search-box\" (keyup)=\"searchByName(searchBox.value)\" placeholder=\"Search By Name\"/>\r\n    <input #searchBox1 id=\"search-box1\" (keyup)=\"searchByID(searchBox1.value)\" placeholder=\"Search By ID\"/>\r\n    <div>\r\n      <table width=\"470px\" class=\"companies\">\r\n        <tr>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">ID</th>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">NAME</th>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">EMAIL</th>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">PASSWORD</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let comp of searchCompanies || companyByID\" (click)=\"onSelect(comp)\" [class.selected]=\"comp === selectedCompany\"\r\n            class=\"search-result\">\r\n          <td align=\"center\" class=\"badge\">{{comp.id}}</td>\r\n          <td align=\"center\">{{comp.compName}}</td>\r\n          <td align=\"center\"><p *ngIf=\"regularMode === true\">{{comp.email}}</p><input type=\"email\" *ngIf=\"selectedMode === true\"\r\n                                                                                      [(ngModel)]=\"comp.email\"\r\n                                                                                      placeholder=\"email\"/></td>\r\n          <td align=\"center\" *ngIf=\"selectedMode === true\"><p *ngIf=\"regularMode === true\">{{comp.password}}</p><input\r\n            *ngIf=\"selectedMode === true\" [(ngModel)]=\"comp.password\" placeholder=\"password\"/></td>\r\n          <td *ngIf=\"regularMode === true\" align=\"center\" class=\"update-button\">Update</td>\r\n          <td *ngIf=\"selectedMode === true\" align=\"center\" class=\"update-button\" (click)=\"updateCompany(comp, $event)\">\r\n            Update\r\n          </td>\r\n          <td align=\"center\" class=\"delete-button\" (click)=\"deleteCompany(comp, $event)\">Delete</td>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h4>All Companies</h4>\r\n\r\n  <table width=\"470px\" class=\"companies\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>NAME</th>\r\n      <th>EMAIL</th>\r\n      <th *ngIf=\"selectedMode === true\">PASSWORD</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let company of companies\" (click)=\"onSelect(company)\" [class.selected]=\"company === selectedCompany\">\r\n      <td align=\"center\" class=\"badge\">{{company.id}}</td>\r\n      <td align=\"center\">{{company.compName}}</td>\r\n      <td align=\"center\"><p *ngIf=\"company.edit !== true\">{{company.email}}</p><input type=\"email\" *ngIf=\"company.edit === true\"\r\n                                                                                     [(ngModel)]=\"company.email\"\r\n                                                                                     placeholder=\"email\"/></td>\r\n      <td align=\"center\" *ngIf=\"company.edit === true\"><input\r\n        *ngIf=\"company.edit === true\" [(ngModel)]=\"company.password\" placeholder=\"password\"/></td>\r\n      <td *ngIf=\"company.edit !== true\" align=\"center\" class=\"update-button\">Update</td>\r\n      <td *ngIf=\"company.edit === true\" align=\"center\" class=\"update-button\" (click)=\"updateCompany(company, $event)\">\r\n        Update\r\n      </td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"deleteCompany(company, $event)\">Delete</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <!-- </div>\r\n\r\n  <div *ngIf=\"selectedCompany\">\r\n    <h2>\r\n      {{selectedCompany.compName | uppercase}} is my Company\r\n    </h2>\r\n    <button (click)=\"gotoDetail()\">View Details</button>\r\n  </div>\r\n\r\n  -->\r\n\r\n  <div class=\"error\" *ngIf=\"error\"> {{error}}</div>\r\n</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/adminCompanies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_service__ = __webpack_require__("../../../../../src/app/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseobjects_Company__ = __webpack_require__("../../../../../src/app/baseobjects/Company.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCompaniesComponent = (function () {
    function AdminCompaniesComponent(router, adminservice) {
        this.router = router;
        this.adminservice = adminservice;
        this.companies = [];
        this.searchCompanies = [];
        this.newCompany = new __WEBPACK_IMPORTED_MODULE_3__baseobjects_Company__["a" /* Company */]('', '', '', null);
        this.regularMode = true;
        this.addingCompany = false;
        this.showNgFor = false;
    }
    AdminCompaniesComponent.prototype.searchByName = function (name) {
        this.searchCompanies = this.companies.filter(function (company) { return company.compName === name; });
    };
    AdminCompaniesComponent.prototype.searchByID = function (id) {
        var _this = this;
        this.adminservice.getCompanyByID(id).then(function (companies) { return _this.searchCompanies = companies; });
    };
    AdminCompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.adminservice
            .getAllCompanies()
            .then(function (companies) { return _this.companies = companies; })
            .catch(function (error) { return _this.error = error; });
    };
    AdminCompaniesComponent.prototype.addCompany = function (event) {
        var _this = this;
        if (this.companies.find(function (comp) { return comp.id === _this.newCompany.id || _this.newCompany.id === null; })) {
            this.newCompany.id = this.newCompany.id + 1;
            console.log('Company Already Exist');
            return;
        }
        if (this.companies.find(function (comp) { return comp.compName === _this.newCompany.compName || _this.newCompany.compName === null; })) {
            console.log('Customer Already Exist');
            return;
        }
        this.adminservice.postCompany(this.newCompany).then(function () { return _this.companies.push(_this.newCompany); })
            .then(event.stopPropagation())
            .then(function () { return _this.newCompany = new __WEBPACK_IMPORTED_MODULE_3__baseobjects_Company__["a" /* Company */]('', '', '', _this.newCompany.id + 1); });
        this.selectedCompany = null;
    };
    // close(savedCompany: Company): void {
    //   this.addingCompany = false;
    //   if (savedCompany) {
    //     this.getCompanies();
    //   }
    // }
    AdminCompaniesComponent.prototype.updateCompany = function (company, event) {
        // if (company.password === null || company.password === '') {
        //   console.log('No Password Was Entered');
        //   return;
        // };
        this.adminservice.putCompany(company);
        event.stopPropagation();
        this.selectedMode = false;
        this.regularMode = true;
        this.selectedCompany = null;
        company.edit = false;
    };
    AdminCompaniesComponent.prototype.deleteCompany = function (company, event) {
        var _this = this;
        event.stopPropagation();
        this.adminservice
            .deleteCompany(company.id)
            .then(function (res) {
            _this.companies = _this.companies.filter(function (h) { return h !== company; });
            if (_this.selectedCompany === company) {
                _this.selectedCompany = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    AdminCompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    AdminCompaniesComponent.prototype.onSelect = function (company) {
        company.edit = true;
        this.selectedCompany = company;
        this.selectedMode = true;
        this.regularMode = false;
        this.addingCompany = false;
    };
    AdminCompaniesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCompany.id]);
    };
    return AdminCompaniesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AdminCompaniesComponent.prototype, "newCompany", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__baseobjects_Company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__baseobjects_Company__["a" /* Company */]) === "function" && _a || Object)
], AdminCompaniesComponent.prototype, "selectedCompany", void 0);
AdminCompaniesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-admin-companies',
        template: __webpack_require__("../../../../../src/app/admin/adminCompanies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/adminCompanies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__admin_service__["a" /* AdminService */]) === "function" && _c || Object])
], AdminCompaniesComponent);

var _a, _b, _c;
//# sourceMappingURL=adminCompanies.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/adminCustomers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  background-color: rgb(205, 202, 209);\r\n  color: blue;\r\n}\r\n.customers {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n.customers .badge .text{\r\n  position: relative;\r\n}\r\n.customers .comp-name{\r\n  position: fixed;\r\n  text-orientation: mixed;\r\n  height: 20px;\r\n}\r\n.customers td {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .5em;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.customers td:hover {\r\n  color: #607D8B;\r\n  color: rgb(0,120,215);\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.customers td.selected:hover {\r\n  /*background-color: #BBD8DC !important;*/\r\n  color: #039be5;\r\n}\r\n.customers .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.customers .badge {\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  background-color: rgb(0,120,215);\r\n  line-height: 1em;\r\n  position: relative;\r\n  border-radius: 8px 0 0 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n.error {color:red;\r\n}\r\n.customers .update-button{\r\n  background-color: limegreen;\r\n  color:white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n.customers .delete-button{\r\n  background-color: rgb(216,59,1);\r\n  background-color: rgb(216,59,2);\r\n  color:white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/adminCustomers.component.html":
/***/ (function(module, exports) {

module.exports = "<a>\r\n  <h4>Add New Customer</h4>\r\n  <table width=\"470px\" class=\"customers\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>NAME</th>\r\n      <th>PASSWORD</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td align=\"center\"><input type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"newCustomer.id\" placeholder=\"Enter ID\">\r\n      </td>\r\n      <td align=\"center\"><input size=\"10\" [(ngModel)]=\"newCustomer.custName\" placeholder=\"Enter Name\"></td>\r\n      <td align=\"center\"><input size=\"15\" type=\"password\" [(ngModel)]=\"newCustomer.password\"\r\n                                placeholder=\"Enter Password\"></td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"addCustomer($event)\">Create</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div id=\"search-component\">\r\n    <h4>Search Customer</h4>\r\n    <input #searchBox id=\"search-box\" (keyup)=\"searchByName(searchBox.value)\" placeholder=\"Search By Name\"/>\r\n    <input #searchBox1 id=\"search-box1\" (keyup)=\"searchByID(searchBox1.value)\" placeholder=\"Search By ID\"/>\r\n    <div>\r\n      <table width=\"470px\" class=\"customers\">\r\n        <tr>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">ID</th>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">NAME</th>\r\n          <th *ngIf=\"searchBox.value || searchBox1.value\">PASSWORD</th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let cust of searchCustomers || customerByID\" (click)=\"onSelect(cust)\"\r\n            [class.selected]=\"cust === selectedCustomer\"\r\n            class=\"search-result\">\r\n          <td align=\"center\" class=\"badge\">{{cust.id}}</td>\r\n          <td align=\"center\">{{cust.custName}}</td>\r\n          <td align=\"center\" *ngIf=\"selectedMode === true\"><p *ngIf=\"regularMode === true\">{{cust.password}}</p><input\r\n            *ngIf=\"selectedMode === true\" [(ngModel)]=\"cust.password\" placeholder=\"password\"/></td>\r\n          <td *ngIf=\"regularMode === true\" align=\"center\" class=\"update-button\">Update</td>\r\n          <td *ngIf=\"selectedMode === true\" align=\"center\" class=\"update-button\" (click)=\"updateCustomer(cust, $event)\">\r\n            Update\r\n          </td>\r\n          <td align=\"center\" class=\"delete-button\" (click)=\"deleteCustomer(cust, $event)\">Delete</td>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h4>All Customers</h4>\r\n\r\n  <table width=\"470px\" class=\"customers\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>NAME</th>\r\n      <th *ngIf=\"selectedMode === true\">PASSWORD</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let custo of customers\" (click)=\"onSelect(custo)\"\r\n        [class.selected]=\"custo === selectedCustomer\">\r\n      <td align=\"center\" class=\"badge\">{{custo.id}}</td>\r\n      <td align=\"center\">{{custo.custName}}</td>\r\n      <td align=\"center\" *ngIf=\"custo.edit === true\"><p *ngIf=\"custo.edit !== true\">{{custo.password}}</p><input\r\n        *ngIf=\"custo.edit === true\" [(ngModel)]=\"custo.password\" placeholder=\"password\"/></td>\r\n      <td *ngIf=\"custo.edit !== true\" align=\"center\" class=\"update-button\">Update</td>\r\n      <td *ngIf=\"custo.edit === true\" align=\"center\" class=\"update-button\" (click)=\"updateCustomer(custo, $event)\">\r\n        Update\r\n      </td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"deleteCustomer(custo, $event)\">Delete</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <!-- </div>\r\n\r\n  <div *ngIf=\"selectedCompany\">\r\n    <h2>\r\n      {{selectedCompany.compName | uppercase}} is my Company\r\n    </h2>\r\n    <button (click)=\"gotoDetail()\">View Details</button>\r\n  </div>\r\n\r\n  -->\r\n\r\n  <div class=\"error\" *ngIf=\"error\"> {{error}}</div>\r\n</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/adminCustomers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseobjects_Customer__ = __webpack_require__("../../../../../src/app/baseobjects/Customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__("../../../../../src/app/admin/admin.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var AdminCustomersComponent = (function () {
    function AdminCustomersComponent(router, adminservice) {
        this.router = router;
        this.adminservice = adminservice;
        this.customers = new Array;
        this.searchCustomers = [];
        this.newCustomer = new __WEBPACK_IMPORTED_MODULE_2__baseobjects_Customer__["a" /* Customer */](null, '', '');
        this.regularMode = true;
        this.addingCustomer = false;
        this.showNgFor = false;
    }
    AdminCustomersComponent.prototype.searchByName = function (name) {
        this.searchCustomers = this.customers.filter(function (customer) { return customer.custName === name; });
    };
    AdminCustomersComponent.prototype.searchByID = function (id) {
        var _this = this;
        console.log(Number.parseInt(id));
        this.searchCustomers = [];
        this.adminservice.getCustomerById(Number.parseInt(id))
            .then(function (res) {
            if (res.id != null) {
                _this.searchCustomers.push(res);
            }
        });
    };
    AdminCustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.adminservice
            .getAllCustomers()
            .then(function (customers) { return _this.customers = customers; })
            .catch(function (error) { return _this.error = error; });
    };
    AdminCustomersComponent.prototype.addCustomer = function (event) {
        var _this = this;
        if (this.customers.find(function (cust) { return cust.id === _this.newCustomer.id || _this.newCustomer.id === null; })) {
            this.newCustomer.id = this.newCustomer.id + 1;
            console.log('Customer Already Exist');
            return;
        }
        if (this.customers.find(function (cust) { return cust.custName === _this.newCustomer.custName || _this.newCustomer.custName === null; })) {
            console.log('Customer Already Exist');
            return;
        }
        this.adminservice.postCustomer(this.newCustomer).then(function () { return _this.customers.push(_this.newCustomer); })
            .then(event.stopPropagation())
            .then(function () {
            return _this.newCustomer = new __WEBPACK_IMPORTED_MODULE_2__baseobjects_Customer__["a" /* Customer */](_this.newCustomer.id + 1, '', '');
        });
        this.selectedCustomer = null;
    };
    AdminCustomersComponent.prototype.close = function (savedCustomer) {
        this.addingCustomer = false;
        if (savedCustomer) {
            this.getCustomers();
        }
    };
    AdminCustomersComponent.prototype.updateCustomer = function (customer, event) {
        this.adminservice.putCustomer(customer);
        event.stopPropagation();
        this.selectedMode = false;
        this.regularMode = true;
        this.selectedCustomer = null;
        customer.edit = false;
    };
    AdminCustomersComponent.prototype.deleteCustomer = function (customer, event) {
        var _this = this;
        event.stopPropagation();
        this.adminservice
            .deleteCustomer(customer.id)
            .then(function (res) {
            _this.customers = _this.customers.filter(function (h) { return h !== customer; });
            if (_this.selectedCustomer === customer) {
                _this.selectedCustomer = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    AdminCustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    AdminCustomersComponent.prototype.onSelect = function (customer) {
        this.selectedCustomer = customer;
        customer.edit = true;
        this.selectedMode = true;
        this.regularMode = false;
        this.addingCustomer = false;
    };
    AdminCustomersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCustomer.id]);
    };
    return AdminCustomersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AdminCustomersComponent.prototype, "newCustomer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__baseobjects_Customer__["a" /* Customer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baseobjects_Customer__["a" /* Customer */]) === "function" && _a || Object)
], AdminCustomersComponent.prototype, "selectedCustomer", void 0);
AdminCustomersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-admin-customers',
        template: __webpack_require__("../../../../../src/app/admin/adminCustomers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/adminCustomers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]) === "function" && _c || Object])
], AdminCustomersComponent);

var _a, _b, _c;
//# sourceMappingURL=adminCustomers.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_adminCompanies_component__ = __webpack_require__("../../../../../src/app/admin/adminCompanies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_adminCustomers_component__ = __webpack_require__("../../../../../src/app/admin/adminCustomers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full' },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_6_app_Login_login_component__["a" /* LoginComponent */] },
    { path: 'Admin_Companies', component: __WEBPACK_IMPORTED_MODULE_2__admin_adminCompanies_component__["a" /* AdminCompaniesComponent */] },
    { path: 'Admin_Customers', component: __WEBPACK_IMPORTED_MODULE_3__admin_adminCustomers_component__["a" /* AdminCustomersComponent */] },
    { path: 'CompanyPanel', component: __WEBPACK_IMPORTED_MODULE_4__company_company_component__["a" /* CompanyComponent */] },
    { path: 'CustomerPanel', component: __WEBPACK_IMPORTED_MODULE_5__customer_customer_component__["a" /* CustomerComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  color: #555;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n.header-bar {\n  background-color: rgb(0,120,215);\n  height: 4px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CSP';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-csp',
        template: "\n    <h1>{{title}}</h1>\n    <div class=\"header-bar\"></div>\n    <nav>\n      <a routerLink=\"/Admin_Companies\" routerLinkActive=\"active\">Get All Companies</a>\n      <a routerLink=\"/Admin_Customers\" routerLinkActive=\"active\">Get All Customers</a>\n      <a routerLink=\"/CustomerPanel\" routerLinkActive=\"active\">Customer Panel</a>\n      <a routerLink=\"/CompanyPanel\" routerLinkActive=\"active\">Company Panel</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_adminCompanies_component__ = __webpack_require__("../../../../../src/app/admin/adminCompanies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_adminCustomers_component__ = __webpack_require__("../../../../../src/app/admin/adminCustomers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_admin_service__ = __webpack_require__("../../../../../src/app/admin/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Login_login_service__ = __webpack_require__("../../../../../src/app/Login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Login_login_component__ = __webpack_require__("../../../../../src/app/Login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__admin_adminCompanies_component__["a" /* AdminCompaniesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__admin_adminCustomers_component__["a" /* AdminCustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__company_company_component__["a" /* CompanyComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Login_login_component__["a" /* LoginComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__admin_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_11__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_12__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_13__Login_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/baseobjects/Company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(compName, email, password, id) {
        this.edit = false;
        this.id = id;
        this.compName = compName;
        this.email = email;
        this.password = password;
    }
    return Company;
}());

//# sourceMappingURL=Company.js.map

/***/ }),

/***/ "../../../../../src/app/baseobjects/Coupon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coupon; });
var Coupon = (function () {
    function Coupon(id, title, startDate, endDate, amount, type, message, price, image) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.type = type;
        this.message = message;
        this.price = price;
        this.image = image;
    }
    return Coupon;
}());

//# sourceMappingURL=Coupon.js.map

/***/ }),

/***/ "../../../../../src/app/baseobjects/Customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer(id, custName, password) {
        this.edit = false;
        this.id = id;
        this.custName = custName;
        this.password = password;
    }
    return Customer;
}());

//# sourceMappingURL=Customer.js.map

/***/ }),

/***/ "../../../../../src/app/baseobjects/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userName, password, clientType) {
        this.userName = userName;
        this.password = password;
        this.clientType = clientType;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__ = __webpack_require__("../../../../../src/app/baseobjects/Coupon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_service__ = __webpack_require__("../../../../../src/app/company/company.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Or Dekalo on 11/07/2017.
 */




var CompanyComponent = (function () {
    function CompanyComponent(router, companyService) {
        this.router = router;
        this.companyService = companyService;
        this.newCoupon = new __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__["a" /* Coupon */](1, '', new Date(), new Date(), 0, 'RESTURANTS', '', 0, '');
        this.regularMode = true;
        this.addingCoupon = false;
        this.showNgFor = false;
    }
    CompanyComponent.prototype.searchByTitle = function (title) {
        this.searchCoupons = this.coupons.filter(function (coupon) { return coupon.title === title; });
    };
    CompanyComponent.prototype.searchByType = function (type) {
        var _this = this;
        this.companyService.getCouponByType(type).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CompanyComponent.prototype.searchByPrice = function (price) {
        var _this = this;
        this.companyService.getCouponByPrice(price).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CompanyComponent.prototype.searchByDate = function (date) {
        var _this = this;
        this.companyService.getCouponByDate(date).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CompanyComponent.prototype.searchByID = function (id) {
        var _this = this;
        this.companyService.getCouponById(id).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    // searchByID(id: number): void {
    //   console.log(id);
    //   this.searchCoupons = [];
    //   this.companyService.getCouponById(id)
    //     .then(res => {
    //       if (res.id != null) {
    //         this.searchCoupons.push(res)
    //       }
    //     });
    // }
    CompanyComponent.prototype.getCoupons = function () {
        var _this = this;
        this.companyService
            .getAllCoupons()
            .then(function (coupons) { return _this.coupons = coupons; })
            .then(function (coupons) { return _this.coupons.map(function (coup) { return console.log(coup); }); })
            .catch(function (error) { return _this.error = error; });
    };
    CompanyComponent.prototype.addCoupon = function (event) {
        var _this = this;
        if (this.coupons.find(function (coupon) { return coupon.id === _this.newCoupon.id || _this.newCoupon.id === null; })) {
            this.newCoupon.id = this.newCoupon.id + 1;
            console.log('Coupon Already Exist');
            return;
        }
        if (this.coupons.find(function (coupon) { return coupon.title === _this.newCoupon.title || _this.newCoupon.title === null; })) {
            console.log('Customer Already Exist');
            return;
        }
        this.companyService.postCoupon(this.newCoupon).then(function () { return _this.coupons.push(_this.newCoupon); })
            .then(event.stopPropagation())
            .then(function () { return _this.newCoupon = new __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__["a" /* Coupon */](1, '', new Date(), new Date(), 0, 'RESTURANTS', '', 0, ''); });
        this.selectedCoupon = null;
    };
    CompanyComponent.prototype.close = function (savedCoupon) {
        this.addingCoupon = false;
        if (savedCoupon) {
            this.getCoupons();
        }
    };
    CompanyComponent.prototype.updateCoupon = function (coupon, event) {
        this.companyService.putCoupon(coupon);
        event.stopPropagation();
        this.selectedMode = false;
        this.regularMode = true;
        this.selectedCoupon = null;
    };
    CompanyComponent.prototype.deleteCoupon = function (coupon, event) {
        var _this = this;
        event.stopPropagation();
        this.companyService
            .deleteCoupon(coupon.id)
            .then(function (res) {
            _this.coupons = _this.coupons.filter(function (h) { return h !== coupon; });
            if (_this.selectedCoupon === coupon) {
                _this.selectedCoupon = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    CompanyComponent.prototype.ngOnInit = function () {
        console.log(new Date());
        this.getCoupons();
    };
    CompanyComponent.prototype.onSelect = function (coupon) {
        this.selectedCoupon = coupon;
        this.selectedMode = true;
        this.regularMode = false;
        this.addingCoupon = false;
    };
    CompanyComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCoupon.id]);
    };
    return CompanyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], CompanyComponent.prototype, "newCoupon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__["a" /* Coupon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__["a" /* Coupon */]) === "function" && _a || Object)
], CompanyComponent.prototype, "selectedCoupon", void 0);
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-coupon-company',
        template: __webpack_require__("../../../../../src/app/company/companyCoupons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company/companyCoupons.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__company_service__["a" /* CompanyService */]) === "function" && _c || Object])
], CompanyComponent);

var _a, _b, _c;
//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Or Dekalo on 11/07/2017.
 */




var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8080/CSP/webapi/companyservice';
    }
    CompanyService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    CompanyService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CompanyService.prototype.postCoupon = function (coupon) {
        return this.http
            .post(this.baseURL + "/createcoupon", JSON.stringify(coupon), { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return coupon; })
            .catch(this.handleError);
    };
    CompanyService.prototype.putCoupon = function (coupon) {
        return this.http
            .put(this.baseURL + "/updatecoupon", JSON.stringify(coupon), { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return coupon; })
            .catch(this.handleError);
    };
    // saveCoupon(coupon: Coupon): Promise<Coupon> {
    //   if (coupon.id) {
    //     return this.putCoupon(coupon);
    //   }
    //   return this.postCoupon(coupon);
    // }
    CompanyService.prototype.deleteCoupon = function (id) {
        return this.http.delete(this.baseURL + "/deletecoupon/" + id, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CompanyService.prototype.getAllCoupons = function () {
        console.log('Getting All Coupons');
        return this.http.get(this.baseURL + "/getallcoupons", { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // getCouponById(id: number): Promise<Coupon> {
    //   console.log('Get Coupon By ID - ' + id);
    //   return this.http.get(`${this.baseURL}/getcoupon/${id}`)
    //     .toPromise()
    //     .then(response => response.json() as Coupon)
    //     .catch(this.handleError);
    // }
    CompanyService.prototype.getCouponById = function (id) {
        console.log('Getting Coupons By ID - ' + id);
        return this.getAllCoupons()
            .then(function (coupons) { return coupons.filter(function (coupon) { return coupon.id <= id; }); })
            .then(function (coupons) { return coupons.filter(function (coupon) { return coupon.id >= id; }); });
    };
    CompanyService.prototype.getCouponByPrice = function (price) {
        console.log('Getting Coupons By Price - ' + price);
        return this.getAllCoupons().then(function (coupons) { return coupons.filter(function (coupon) { return coupon.price <= price; }); });
    };
    CompanyService.prototype.getCouponByType = function (type) {
        console.log('Getting Coupons By Type - ' + type);
        return this.getAllCoupons().then(function (coupons) { return coupons.filter(function (coupon) { return coupon.type === type; }); });
    };
    CompanyService.prototype.getCouponByDate = function (date) {
        console.log('Getting Coupons By Date - ' + date);
        return this.getAllCoupons().then(function (coupons) { return coupons.filter(function (coupon) { return coupon.endDate <= date; }); });
    };
    return CompanyService;
}());
CompanyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CompanyService);

var _a;
//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "../../../../../src/app/company/companyCoupons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  background-color: rgb(205, 202, 209);\r\n  color: blue;\r\n}\r\n\r\n.coupons {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n\r\n.coupons .badge .text {\r\n  position: relative;\r\n}\r\n\r\n.coupons .comp-name {\r\n  position: fixed;\r\n  text-orientation: mixed;\r\n  height: 20px;\r\n}\r\n\r\n.coupons td {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .5em;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.coupons select {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .5em;\r\n  height: 2.2em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.coupons td:hover {\r\n  color: #607D8B;\r\n  color: rgb(0, 120, 215);\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.coupons td.selected:hover {\r\n  /*background-color: #BBD8DC !important;*/\r\n  color: #039be5;\r\n}\r\n\r\n.coupons .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.coupons .badge {\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  background-color: rgb(0, 120, 215);\r\n  line-height: 1em;\r\n  position: relative;\r\n  border-radius: 8px 0 0 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n}\r\n\r\n.coupons .update-button {\r\n  background-color: limegreen;\r\n  color: white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.coupons .delete-button {\r\n  background-color: rgb(216, 59, 1);\r\n  background-color: rgb(216, 59, 2);\r\n  color: white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company/companyCoupons.component.html":
/***/ (function(module, exports) {

module.exports = "<a>\r\n  <h4>Add New Coupon</h4>\r\n  <table width=\"470px\" class=\"coupons\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>TITLE</th>\r\n      <th>START DATE</th>\r\n      <th>END DATE</th>\r\n      <th>AMOUNT</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td align=\"center\"><input align=\"center\" type=\"number\" min=\"1\" max=\"999\" [(ngModel)]=\"newCoupon.id\" placeholder=\"Enter ID\">\r\n      </td>\r\n      <td align=\"center\"><input align=\"center\" size=\"10\" [(ngModel)]=\"newCoupon.title\" placeholder=\"Enter Title\"></td>\r\n      <td align=\"center\"><input align=\"center\" type=\"date\" size=\"20\" [(ngModel)]=\"newCoupon.startDate\" placeholder=\"Enter Start Date\">\r\n      </td>\r\n      <td align=\"center\"><input align=\"center\" type=\"date\" size=\"20\" [(ngModel)]=\"newCoupon.endDate\" placeholder=\"Enter End Date\"></td>\r\n      <td align=\"center\"><input align=\"center\" type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"newCoupon.amount\"\r\n                                placeholder=\"Enter Amount\"></td>\r\n    </tr>\r\n    <tr>\r\n      <th>TYPE</th>\r\n      <th>MESSAGE</th>\r\n      <th>PRICE</th>\r\n      <th>IMAGE</th>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td align=\"center\"><select name=\"CouponType\" [(ngModel)]=\"newCoupon.type\" placeholder=\"Select Type\">\r\n        <option value=\"RESTURANTS\">RESTURANTS</option>\r\n        <option value=\"ELECTRICITY\">ELECTRICITY</option>\r\n        <option value=\"FOOD\">FOOD</option>\r\n        <option value=\"HEALTH\">HEALTH</option>\r\n        <option value=\"SPORTS\">SPORTS</option>\r\n        <option value=\"CAMPING\">CAMPING</option>\r\n        <option value=\"TRAVELLING\">TRAVELLING</option>\r\n      </select>\r\n      </td>\r\n      <td align=\"center\"><input align=\"center\" type=\"text\" size=\"20\" [(ngModel)]=\"newCoupon.message\" placeholder=\"Enter Message\">\r\n      </td>\r\n      <td align=\"center\"><input align=\"center\" type=\"number\" min=\"1\" max=\"9999\" [(ngModel)]=\"newCoupon.price\"\r\n                                placeholder=\"Enter Price\">\r\n      </td>\r\n      <td align=\"center\"><input align=\"center\" type=\"url\" size=\"20\" [(ngModel)]=\"newCoupon.image\" placeholder=\"Enter Image URL\">\r\n      </td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"addCoupon($event)\">Create</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div id=\"search-component\">\r\n    <h4>Search Coupon</h4>\r\n    <input align=\"center\" #searchTitle id=\"search-Title\" (keyup)=\"searchByTitle(searchTitle.value)\" size=\"12\"\r\n           placeholder=\"Search By Name\"/>\r\n    <input align=\"center\" #searchID id=\"search-id\" type=\"number\" min=\"1\" max=\"9999999\" (keyup)=\"searchByID(searchID.value)\"\r\n           placeholder=\"Search By ID\"/>\r\n    <select align=\"center\" #searchType id=\"search-type\" (change)=\"searchByType(searchType.value)\" placeholder=\"Search By Type\">\r\n      <option value=\"\">Search By Type</option>\r\n      <option value=\"RESTURANTS\">RESTURANTS</option>\r\n      <option value=\"ELECTRICITY\">ELECTRICITY</option>\r\n      <option value=\"FOOD\">FOOD</option>\r\n      <option value=\"HEALTH\">HEALTH</option>\r\n      <option value=\"SPORTS\">SPORTS</option>\r\n      <option value=\"CAMPING\">CAMPING</option>\r\n      <option value=\"TRAVELLING\">TRAVELLING</option>\r\n    </select>\r\n    <input align=\"center\" #searchPrice id=\"search-price\" type=\"number\" min=\"1\" max=\"9999999999\"\r\n           (keyup)=\"searchByPrice(searchPrice.value)\"\r\n           placeholder=\"Search By Price\"/>\r\n    <input align=\"center\" #searchDate id=\"search-date\" type=\"date\" (change)=\"searchByDate(searchDate.value)\"\r\n           placeholder=\"Search By Date\"/>\r\n    <div>\r\n      <table width=\"470px\" class=\"coupons\">\r\n        <tr>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            ID\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            TITLE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            START DATE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            END DATE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            AMOUNT\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            TYPE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            MESSAGE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            PRICE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            IMAGE\r\n          </th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let coup of searchCoupons\" (click)=\"onSelect(coup)\"\r\n            [class.selected]=\"coup === selectedCoupon\"\r\n            class=\"search-result\">\r\n          <td align=\"center\" class=\"badge\">{{coup.id}}</td>\r\n          <td align=\"center\">{{coup.title}}</td>\r\n          <td align=\"center\">{{coup.startDate}}</td>\r\n          <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.endDate}}</p><input type=\"date\"\r\n                                                                                        *ngIf=\"selectedMode === true\"\r\n                                                                                        [(ngModel)]=\"coup.endDate\"\r\n                                                                                        placeholder=\"End Date\"/></td>\r\n          <td align=\"center\">{{coup.amount}}</td>\r\n          <td align=\"center\">{{coup.type}}</td>\r\n          <td align=\"center\">{{coup.message}}</td>\r\n          <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.price}}</p><input type=\"number\" min=\"1\" max=\"9999\"\r\n                                                                                      *ngIf=\"selectedMode === true\"\r\n                                                                                      [(ngModel)]=\"coup.price\"\r\n                                                                                      placeholder=\"Price\"/></td>\r\n          <td align=\"center\">{{coup.image}}</td>\r\n          <td *ngIf=\"regularMode === true\" align=\"center\" class=\"update-button\">Update</td>\r\n          <td *ngIf=\"selectedMode === true\" align=\"center\" class=\"update-button\" (click)=\"updateCoupon(coup, $event)\">\r\n            Update\r\n          </td>\r\n          <td align=\"center\" class=\"delete-button\" (click)=\"deleteCoupon(coup, $event)\">Delete</td>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h4>All Coupons</h4>\r\n\r\n  <table class=\"coupons\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>TITLE</th>\r\n      <th>START DATE</th>\r\n      <th>END DATE</th>\r\n      <th>AMOUNT</th>\r\n      <th>TYPE</th>\r\n      <th>MESSAGE</th>\r\n      <th>PRICE</th>\r\n      <th>IMAGE</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let coup of coupons\" (click)=\"onSelect(coup)\"\r\n        [class.selected]=\"coup === selectedCoupon\"\r\n        class=\"search-result\">\r\n      <td align=\"center\" class=\"badge\">{{coup.id}}</td>\r\n      <td align=\"center\">{{coup.title}}</td>\r\n      <td align=\"center\">{{coup.startDate}}</td>\r\n      <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.endDate}}</p><input type=\"date\"\r\n                                                                                    *ngIf=\"selectedMode === true\"\r\n                                                                                    [(ngModel)]=\"coup.endDate\"\r\n                                                                                    placeholder=\"End Date\"/></td>\r\n      <td align=\"center\">{{coup.amount}}</td>\r\n      <td align=\"center\">{{coup.type}}</td>\r\n      <td align=\"center\">{{coup.message}}</td>\r\n      <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.price}}</p><input type=\"number\" min=\"1\" max=\"9999\"\r\n                                                                                  *ngIf=\"selectedMode === true\"\r\n                                                                                  [(ngModel)]=\"coup.price\"\r\n                                                                                  placeholder=\"Price\"/></td>\r\n      <td align=\"center\">{{coup.image}}</td>\r\n      <td *ngIf=\"regularMode === true\" align=\"center\" class=\"update-button\">Update</td>\r\n      <td *ngIf=\"selectedMode === true\" align=\"center\" class=\"update-button\" (click)=\"updateCoupon(coup, $event)\">\r\n        Update\r\n      </td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"deleteCoupon(coup, $event)\">Delete</td>\r\n  </table>\r\n\r\n  <!-- </div>\r\n\r\n  <div *ngIf=\"selectedCompany\">\r\n    <h2>\r\n      {{selectedCompany.compName | uppercase}} is my Company\r\n    </h2>\r\n    <button (click)=\"gotoDetail()\">View Details</button>\r\n  </div>\r\n\r\n  -->\r\n\r\n  <div class=\"error\" *ngIf=\"error\"> {{error}}</div>\r\n</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__ = __webpack_require__("../../../../../src/app/baseobjects/Coupon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Or Dekalo on 11/07/2017.
 */




var CustomerComponent = (function () {
    function CustomerComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.regularMode = true;
        this.addingCoupon = false;
        this.showNgFor = false;
    }
    CustomerComponent.prototype.searchByTitle = function (title) {
        this.searchCoupons = this.coupons.filter(function (coupon) { return coupon.title === title; });
    };
    CustomerComponent.prototype.searchByType = function (type) {
        var _this = this;
        this.customerService.getCouponByType(type).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CustomerComponent.prototype.searchByPrice = function (price) {
        var _this = this;
        this.customerService.getCouponByPrice(price).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CustomerComponent.prototype.searchByDate = function (date) {
        var _this = this;
        this.customerService.getCouponByDate(date).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CustomerComponent.prototype.searchByID = function (id) {
        var _this = this;
        this.customerService.getCouponById(id).then(function (coupons) { return _this.searchCoupons = coupons; });
    };
    CustomerComponent.prototype.getCoupons = function () {
        var _this = this;
        this.customerService
            .getAllCoupons()
            .then(function (coupons) { return _this.coupons = coupons; })
            .then(function (coupons) { return _this.coupons.map(function (coup) { return console.log(coup); }); })
            .catch(function (error) { return _this.error = error; });
    };
    CustomerComponent.prototype.purchaseCoupon = function (id, event) {
        var _this = this;
        event.stopPropagation();
        this.customerService
            .purchaseCoupon(id)
            .then(function (res) {
            _this.getCoupons();
            _this.selectedCoupon = null;
        })
            .catch(function (error) { return _this.error = error; });
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.getCoupons();
    };
    CustomerComponent.prototype.onSelect = function (coupon) {
        this.selectedCoupon = coupon;
        this.selectedMode = true;
        this.regularMode = false;
        this.addingCoupon = false;
    };
    CustomerComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCoupon.id]);
    };
    return CustomerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__["a" /* Coupon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__baseobjects_Coupon__["a" /* Coupon */]) === "function" && _a || Object)
], CustomerComponent.prototype, "selectedCoupon", void 0);
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-customer',
        template: __webpack_require__("../../../../../src/app/customer/customerCoupon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/customerCoupon.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */]) === "function" && _c || Object])
], CustomerComponent);

var _a, _b, _c;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Or Dekalo on 11/07/2017.
 */




var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8080/CSP/webapi/customerservice';
    }
    CustomerService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    CustomerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CustomerService.prototype.purchaseCoupon = function (id) {
        return this.http
            .post(this.baseURL + "/purchasecoupon/" + id, { headers: this.getHeaders() })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CustomerService.prototype.getAllCoupons = function () {
        console.log('Getting All Coupons');
        return this.http.get(this.baseURL + "/getallpurchasedcoupons", { headers: this.getHeaders() }).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.getCouponById = function (id) {
        console.log('Getting Coupons By ID - ' + id);
        return this.getAllCoupons()
            .then(function (coupons) { return coupons.filter(function (coupon) { return coupon.id <= id; }); })
            .then(function (coupons) { return coupons.filter(function (coupon) { return coupon.id >= id; }); });
    };
    CustomerService.prototype.getCouponByPrice = function (price) {
        console.log('Getting Coupons By Price - ' + price);
        return this.getAllCoupons().then(function (coupons) { return coupons.filter(function (coupon) { return coupon.price <= price; }); });
    };
    CustomerService.prototype.getCouponByType = function (type) {
        console.log('Getting Coupons By Type - ' + type);
        return this.getAllCoupons().then(function (coupons) { return coupons.filter(function (coupon) { return coupon.type === type; }); });
    };
    CustomerService.prototype.getCouponByDate = function (date) {
        console.log('Getting Coupons By Date - ' + date);
        return this.getAllCoupons().then(function (coupons) { return coupons.filter(function (coupon) { return coupon.endDate <= date; }); });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CustomerService);

var _a;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customerCoupon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n  background-color: #CFD8DC !important;\r\n  background-color: rgb(205, 202, 209);\r\n  color: blue;\r\n}\r\n.coupons {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 25em;\r\n}\r\n\r\n.coupons .badge .text{\r\n  position: relative;\r\n}\r\n.coupons .comp-name{\r\n  position: fixed;\r\n  text-orientation: mixed;\r\n  height: 20px;\r\n}\r\n.coupons td {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .5em;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.coupons td:hover {\r\n  color: #607D8B;\r\n  color: rgb(0,120,215);\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.coupons td.selected:hover {\r\n  /*background-color: #BBD8DC !important;*/\r\n  color: #039be5;\r\n}\r\n.coupons .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.coupons .badge {\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  background-color: rgb(0,120,215);\r\n  line-height: 1em;\r\n  position: relative;\r\n  border-radius: 8px 0 0 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n.error {color:red;\r\n}\r\n.coupons .update-button{\r\n  background-color: limegreen;\r\n  color:white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n.coupons .delete-button{\r\n  background-color: rgb(216,59,1);\r\n  background-color: rgb(216,59,2);\r\n  color:white;\r\n  margin: .5em;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  padding: 5px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customerCoupon.component.html":
/***/ (function(module, exports) {

module.exports = "<a>\r\n  <h4>Purchase New Coupon By ID</h4>\r\n  <table width=\"470px\" class=\"coupons\">\r\n    <tr>\r\n      <th>ID</th>\r\n    </tr>\r\n    <tr>\r\n      <td align=\"center\"><input align=\"center\" #purchaseBox id=\"purchase-box\" type=\"number\" min=\"1\" max=\"9999999999\"></td>\r\n      <td align=\"center\" class=\"delete-button\" (click)=\"purchaseCoupon(purchaseBox.value, $event)\">Purchase</td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div id=\"search-component\">\r\n    <h4>Search Coupon</h4>\r\n    <input align=\"center\" #searchTitle id=\"search-Title\" (keyup)=\"searchByTitle(searchTitle.value)\" size=\"12\"\r\n           placeholder=\"Search By Name\"/>\r\n    <input align=\"center\" #searchID id=\"search-id\" type=\"number\" min=\"1\" max=\"9999999\" (keyup)=\"searchByID(searchID.value)\"\r\n           placeholder=\"Search By ID\"/>\r\n    <select align=\"center\" #searchType id=\"search-type\" (change)=\"searchByType(searchType.value)\" placeholder=\"Search By Type\">\r\n      <option value=\"\">Search By Type</option>\r\n      <option value=\"RESTURANTS\">RESTURANTS</option>\r\n      <option value=\"ELECTRICITY\">ELECTRICITY</option>\r\n      <option value=\"FOOD\">FOOD</option>\r\n      <option value=\"HEALTH\">HEALTH</option>\r\n      <option value=\"SPORTS\">SPORTS</option>\r\n      <option value=\"CAMPING\">CAMPING</option>\r\n      <option value=\"TRAVELLING\">TRAVELLING</option>\r\n    </select>\r\n    <input align=\"center\" #searchPrice id=\"search-price\" type=\"number\" min=\"1\" max=\"9999999999\"\r\n           (keyup)=\"searchByPrice(searchPrice.value)\"\r\n           placeholder=\"Search By Price\"/>\r\n    <input align=\"center\" #searchDate id=\"search-date\" type=\"date\" (change)=\"searchByDate(searchDate.value)\"\r\n           placeholder=\"Search By Date\"/>\r\n    <div>\r\n      <table width=\"470px\" class=\"coupons\">\r\n        <tr>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            ID\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            TITLE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            START DATE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            END DATE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            AMOUNT\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            TYPE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            MESSAGE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            PRICE\r\n          </th>\r\n          <th *ngIf=\"searchTitle.value || searchID.value || searchType.value || searchPrice.value || searchDate.value\">\r\n            IMAGE\r\n          </th>\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let coup of searchCoupons\" (click)=\"onSelect(coup)\"\r\n            [class.selected]=\"coup === selectedCoupon\"\r\n            class=\"search-result\">\r\n          <td align=\"center\" class=\"badge\">{{coup.id}}</td>\r\n          <td align=\"center\">{{coup.title}}</td>\r\n          <td align=\"center\">{{coup.startDate}}</td>\r\n          <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.endDate}}</p><input type=\"date\"\r\n                                                                                        *ngIf=\"selectedMode === true\"\r\n                                                                                        [(ngModel)]=\"coup.endDate\"\r\n                                                                                        placeholder=\"End Date\"/></td>\r\n          <td align=\"center\">{{coup.amount}}</td>\r\n          <td align=\"center\">{{coup.type}}</td>\r\n          <td align=\"center\">{{coup.message}}</td>\r\n          <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.price}}</p><input type=\"number\" min=\"1\" max=\"9999\"\r\n                                                                                      *ngIf=\"selectedMode === true\"\r\n                                                                                      [(ngModel)]=\"coup.price\"\r\n                                                                                      placeholder=\"Price\"/></td>\r\n        <td align=\"center\">{{coup.image}}</td>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <h4>All Coupons</h4>\r\n\r\n  <table class=\"coupons\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>TITLE</th>\r\n      <th>START DATE</th>\r\n      <th>END DATE</th>\r\n      <th>AMOUNT</th>\r\n      <th>TYPE</th>\r\n      <th>MESSAGE</th>\r\n      <th>PRICE</th>\r\n      <th>IMAGE</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let coup of coupons\" (click)=\"onSelect(coup)\"\r\n        [class.selected]=\"coup === selectedCoupon\"\r\n        class=\"search-result\">\r\n      <td align=\"center\" class=\"badge\">{{coup.id}}</td>\r\n      <td align=\"center\">{{coup.title}}</td>\r\n      <td align=\"center\">{{coup.startDate}}</td>\r\n      <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.endDate}}</p><input type=\"date\"\r\n                                                                                    *ngIf=\"selectedMode === true\"\r\n                                                                                    [(ngModel)]=\"coup.endDate\"\r\n                                                                                    placeholder=\"End Date\"/></td>\r\n      <td align=\"center\">{{coup.amount}}</td>\r\n      <td align=\"center\">{{coup.type}}</td>\r\n      <td align=\"center\">{{coup.message}}</td>\r\n      <td align=\"center\"><p *ngIf=\"regularMode === true\">{{coup.price}}</p><input type=\"number\" min=\"1\" max=\"9999\"\r\n                                                                                  *ngIf=\"selectedMode === true\"\r\n                                                                                  [(ngModel)]=\"coup.price\"\r\n                                                                                  placeholder=\"Price\"/></td>\r\n    <td align=\"center\">{{coup.image}}</td>\r\n  </table>\r\n\r\n  <!-- </div>\r\n\r\n  <div *ngIf=\"selectedCompany\">\r\n    <h2>\r\n      {{selectedCompany.compName | uppercase}} is my Company\r\n    </h2>\r\n    <button (click)=\"gotoDetail()\">View Details</button>\r\n  </div>\r\n\r\n  -->\r\n\r\n  <div class=\"error\" *ngIf=\"error\"> {{error}}</div>\r\n</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map