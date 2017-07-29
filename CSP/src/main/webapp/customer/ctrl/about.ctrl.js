(function () {

    var module = angular.module("CSP");

    module.controller("AboutCtrl", AboutCtrlCtor);

    function AboutCtrlCtor(mainCustomerServiceHTTP) {
        this.coupons = [];
        var self = this;

        var promise = mainCustomerServiceHTTP.getAllPurchasedCoupons();
        promise.then(
            function (resp) {
                //alert(resp.data);
                self.coupons = resp.data;

            },
            function (err) {
                alert(err.data);
            });

    }

})();