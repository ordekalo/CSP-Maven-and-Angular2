(function () {

    var module = angular.module("CSP");

    module.controller("CreateCustomerCtrl", CreateCustomerCtrlCtor);

    // Ctor method for the CreateCouponCtrl
    function CreateCustomerCtrlCtor(mainAdminServiceHTTP) {

        this.success = false;
        this.failure = false;

        this.createCustomer = function () {

            if (this.newCustomer == undefined
                || this.newCustomer.id == undefined
                || this.newCustomer.custName == undefined
                || this.newCustomer.password == undefined) {
                this.success = false;
                this.failure = true;
                return;
            }
            this.success = false;
            this.failure = false;
            var self = this;
            var promisePost = mainAdminServiceHTTP.createCustomer(this.newCustomer);
            promisePost.then(function (resp) {
                // alert(resp.data);
                self.customers = resp.data;
                self.newCustomer = {};
                self.success = true;
                self.failure = false;

            }, function (err) {
                alert(err.data);
                self.success = false;
                self.failure = true;
            });


        }

    }

})();