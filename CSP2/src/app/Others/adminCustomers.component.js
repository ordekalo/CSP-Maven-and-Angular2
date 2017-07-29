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
    var AdminCustomersComponent;
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
            let AdminCustomersComponent = class AdminCustomersComponent {
                constructor(router, adminservice) {
                    this.router = router;
                    this.adminservice = adminservice;
                    this.addingCustomer = false;
                    this.showNgFor = false;
                }
                getCustomers() {
                    this.adminservice
                        .getAllCustomers()
                        .then(customers => this.customers = customers)
                        .catch(error => this.error = error);
                }
                addCustomer() {
                    this.addingCustomer = true;
                    this.selectedCustomer = null;
                }
                close(savedCustomer) {
                    this.addingCustomer = false;
                    if (savedCustomer) {
                        this.getCustomers();
                    }
                }
                deleteCustomer(customer, event) {
                    event.stopPropagation();
                    this.adminservice
                        .deleteCustomer(customer.id)
                        .then(res => {
                        this.customers = this.customers.filter(h => h !== customer);
                        if (this.selectedCustomer === customer) {
                            this.selectedCustomer = null;
                        }
                    })
                        .catch(error => this.error = error);
                }
                ngOnInit() {
                    this.getCustomers();
                }
                onSelect(customer) {
                    this.selectedCustomer = customer;
                    this.addingCustomer = false;
                }
                gotoDetail() {
                    this.router.navigate(['/detail', this.selectedCustomer.id]);
                }
            };
            AdminCustomersComponent = __decorate([
                core_1.Component({
                    selector: 'admin-customers',
                    templateUrl: './heroes.component.html',
                    styleUrls: ['./heroes.component.css']
                }), 
                __metadata('design:paramtypes', [router_1.Router, admin_service_1.AdminService])
            ], AdminCustomersComponent);
            exports_1("AdminCustomersComponent", AdminCustomersComponent);
        }
    }
});
//# sourceMappingURL=adminCustomers.component.js.map