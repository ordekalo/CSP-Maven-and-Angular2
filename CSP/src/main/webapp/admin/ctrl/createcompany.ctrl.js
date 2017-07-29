(function () {

    var module = angular.module("CSP");

    module.controller("CreateCompanyCtrl", CreateCompanyCtrlCtor);

    // Ctor method for the CreateCouponCtrl
    function CreateCompanyCtrlCtor(mainAdminServiceHTTP) {

        this.success = false;
        this.failure = false;

        this.createCompany = function () {

            if (this.newCompany == undefined || this.newCompany.id == undefined
                || this.newCompany.compName == undefined || this.newCompany.password == undefined
                || this.newCompany.email == undefined) {
                this.success = false;
                this.failure = true;
                return;
            }

            this.success = false;
            this.failure = false;
            var self = this;

            var promisePost = mainAdminServiceHTTP.createCompany(this.newCompany);
            promisePost.then(
                function (resp) {
                    //alert(resp.data);
                    self.companies = resp.data;
                    self.newCompany = {};
                    self.success = true;
                    self.failure = false;

                },
                function (err) {
                    alert(err.data);
                    self.success = false;
                    self.failure = true;
                });

        }

    }

})();