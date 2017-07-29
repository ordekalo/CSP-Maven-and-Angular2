(function () {

    var module = angular.module("CSP");

    module.controller("GetCouponByTypeCtrl", GetCouponByTypeCtrlCtor);

    function GetCouponByTypeCtrlCtor(mainCompanyService) {
        this.coupons = [];
        var self = this;

        this.getType = function () {
            var promise = mainCompanyService.getCouponsByType(this.type);
            promise.then(
                function (resp) {

                    self.coupons = resp.data;

                },

                function (err) {
                    alert(err.data);
                });

            //************************* set table order /********************** */

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