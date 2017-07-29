(function () {

    var module = angular.module("CSP");

    // http://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working
    module.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

    // router config
    module.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state("/createcompany", {
                url: "/createcompany",
                templateUrl: 'html/createcompany.html',
                controller: "CreateCompanyCtrl as cco"
            })
            .state("/updatecompany", {
                url: "/updatecompany",
                templateUrl: 'html/updatecompany.html',
                controller: "UpdateCompanyCtrl as upco"
            })

            .state("deletecompany", {
                url: "/deletecompany",
                templateUrl: "html/deletecompany.html",
                controller: "DeleteCompanyCtrl as dco"
            })
            .state("getcompany", {
                url: "/getcompany",
                templateUrl: "html/getcompany.html",
                controller: "GetCompanyCtrl as gco"
            })
            .state("getallcompanies", {
                url: "/getallcompanies",
                templateUrl: "html/getallcompanies.html",
                controller: "GetAllCompaniesCtrl as gaco"
            })
            .state("createcustomer", {
                url: "/createcustomer",
                templateUrl: "html/createcustomer.html",
                controller: "CreateCustomerCtrl as ccu"
            })
            .state("updatecustomer", {
                url: "/updatecustomer",
                templateUrl: "html/updatecustomer.html",
                controller: "UpdateCustomerCtrl as upcu"
            })
            .state("deletecustomer", {
                url: "/deletecustomer",
                templateUrl: "html/deletecustomer.html",
                controller: "DeleteCustomerCtrl as dcu"
            })
            .state("getcustomer", {
                url: "/getcustomer",
                templateUrl: "html/getcustomer.html",
                controller: "GetCustomerCtrl as gcu"
            })
            .state("getallcustomers", {
                url: "/getallcustomers",
                templateUrl: "html/getallcustomers.html",
                controller: "GetAllCustomersCtrl as gacu"
            })
            .state("about", {
                url: "/about",
                templateUrl: "html/about.html",
                controller: "aboutCtrl as ab"
            })
            .state("contact", {
                url: "/contact",
                templateUrl: "html/contact.html",
                controller: "ContactCtrl as con"
            })
            .state("home", {
                url: "/home",
                templateUrl: "html/home.html",
            })
        ;

        $urlRouterProvider.when("", "/home"); // first browsing postfix is empty --> route it to /main
        // $urlRouterProvider.otherwise('/404'); // when no switch case matches --> route to /404
    });

})();