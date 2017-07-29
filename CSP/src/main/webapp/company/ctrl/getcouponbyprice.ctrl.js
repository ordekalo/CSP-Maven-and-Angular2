(function () {

    var module = angular.module("CSP");

    module.controller("GetCouponsByPriceCtrl", GetCouponsByPriceCtrlCtor);

    function GetCouponsByPriceCtrlCtor(mainCompanyService) {
        this.coupons = [];
        var self = this;

        this.getPrice = function () {

            var promise = mainCompanyService.getCouponsByPrice(this.price);

            promise.then(
                function (resp) {

                    self.coupons = resp.data;
                },

                function (err) {
                    alert(err.data);
                });

            //*************************** set table order /********************** */

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