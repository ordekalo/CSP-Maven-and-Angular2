(function () {

    var module = angular.module("CSP");

    module.controller("CouponsByPriceCtrl", CouponsByPriceCtrlCtor);

    // Ctor method for the PurchaseCouponCtrlCtor
    function CouponsByPriceCtrlCtor(mainCustomerServiceHTTP) {

        this.coupons = [];
        var self = this;


        this.getPrice = function () {
            var promise = mainCustomerServiceHTTP.getAllPurchasedCouponsByMaxPrice(this.price);
            promise.then(
                function (resp) {
                    //alert(resp.data);
                    self.coupons = resp.data;

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

    }
})();