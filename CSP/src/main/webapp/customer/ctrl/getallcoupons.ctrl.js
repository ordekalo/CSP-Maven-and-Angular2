(function () {

    var module = angular.module("CSP");

    module.controller("GetAllCouponsCtrl", GetAllCouponsCtrlCtor);

    function GetAllCouponsCtrlCtor(mainCustomerServiceHTTP) {
        this.mycoupons = [];
        var self = this;

        var promiseGet = mainCustomerServiceHTTP.getAllPurchasedCoupons();
        promiseGet.then(
            function (resp) {

                self.mycoupons = resp.data;

            },
            function (err) {
                alert(err.data);
            });
        // set table order /********************** */
        this.orderB = "";
        this.goUp = false;

        this.setOrder = function (field) {
            this.goUp = (this.orderB != field) ? false
                : !this.goUp;
            this.orderB = field;
        }
    }


})();
