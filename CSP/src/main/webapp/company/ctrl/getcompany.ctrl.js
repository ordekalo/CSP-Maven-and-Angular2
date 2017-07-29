(function () {

    var module = angular.module("CSP");

    module.controller("GetCompanyCtrl", GetCompanyCtrlCtor);

    function GetCompanyCtrlCtor(mainCompanyService) {
        this.companies = [];
        var self = this;

        var promise = mainCompanyService.getCompany();
        promise.then(
            function (resp) {

                self.coupons = resp.data;

            },
            function (err) {
                alert(err.data);
            });


    }

})();