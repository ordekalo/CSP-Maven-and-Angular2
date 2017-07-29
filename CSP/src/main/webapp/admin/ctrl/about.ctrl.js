(function () {

    var module = angular.module("CSP");

    module.controller("aboutCtrl", AboutCtrlCtor);

    function AboutCtrlCtor(mainAdminServiceHTTP) {
        this.coupons = [];
        var self = this;

        var promise = mainAdminServiceHTTP.getAllPurchasedCoupons();
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