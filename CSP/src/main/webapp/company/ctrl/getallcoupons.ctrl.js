(function () {

    var module = angular.module("CSP");

    module.controller("GetAllCouponsCtrl", GetAllCouponsCtrlCtor);

    function GetAllCouponsCtrlCtor(mainCompanyService) {
        this.coupons = [];
        var self = this;

//		self.coupons.endDate = new Date();
//		var dateString = self.coupons.endDate.getDate() + "/"
//				+ ("0" + (self.coupons.endDate.getMonth() + 1)).slice(-2) + "/"
//				+ ("0" + self.coupons.endDate.getFullYear());

        //alert(dateString);

        var promiseGet = mainCompanyService.getAllCoupons();
        promiseGet.then(function (resp) {

            self.coupons = resp.data;

        }, function (err) {
            alert(err.data);
        });

        //*********************** set table order /********************** */

        this.orderB = "";
        this.goUp = false;

        this.setOrder = function (field) {
            this.goUp = (this.orderB != field) ? false : !this.goUp;
            this.orderB = field;
        }
    }

})();