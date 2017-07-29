(function () {

    var module = angular.module("CSP");

    module.controller("CouponByTypeCtrl", CouponByTypeCtrlCtor);

    function CouponByTypeCtrlCtor(mainCustomerServiceHTTP) {
        this.coupons = [];
        var self = this;

        this.getType = function () {

            var promiseGet = mainCustomerServiceHTTP.getCouponsByType(this.type);
            promiseGet.then(function (resp) {
                // alert(resp.data);
                self.coupons = resp.data;

            }, function (err) {
                alert(err.data);
            });

            // set table order /********************** */
            this.orderB = "";
            this.goUp = false;

            this.setOrder = function (field) {
                this.goUp = (this.orderB != field) ? false : !this.goUp;
                this.orderB = field;
            }
        }

    }
})();