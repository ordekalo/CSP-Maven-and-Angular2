(function () {

    var module = angular.module("CSP");

    module.controller("GetCouponByIdCtrl", GetCouponByIdCtrlCtor);

    function GetCouponByIdCtrlCtor(mainCompanyService) {
        var coupon = [];
        var self = this;

        this.getId = function () {
            var promiseGet = mainCompanyService.getCouponById(this.id);
            promiseGet.then(
                function (resp) {

                    self.coupon = resp.data;
                    //alert(coupon);
                },

                function (err) {
                    alert(err.data);
                });
        }
    }


})();