(function () {

    var module = angular.module("CSP");

    module.controller("CreateCouponCtrl", CreateCouponCtrlCtor);

    // Ctor method for the CreateCouponCtrl
    function CreateCouponCtrlCtor(mainCompanyService) {

        this.success = false;
        this.failure = false;

        this.createCoupon = function () {

            if (this.newCoupon == undefined || this.newCoupon.id == undefined
                || this.newCoupon.title == undefined
                || this.newCoupon.startDate == undefined
                || this.newCoupon.endDate == undefined
                || this.newCoupon.amount == undefined
                || this.newCoupon.type == undefined
                || this.newCoupon.message == undefined
                || this.newCoupon.price == undefined
                || this.newCoupon.image == undefined) {
                this.success = false;
                this.failure = true;
                return;
            }

            var day = this.newCoupon.startDate.getDate() < 10 ? '0' + this.newCoupon.startDate.getDate() : this.newCoupon.startDate.getDate();
            var month = (this.newCoupon.startDate.getMonth() + 1) < 10 ? '0' + (this.newCoupon.startDate.getMonth() + 1) : (this.newCoupon.startDate.getMonth() + 1);
            this.newCoupon.startDate = day + "/" + month + "/" + this.newCoupon.startDate.getFullYear();

            day = this.newCoupon.endDate.getDate() < 10 ? '0' + this.newCoupon.endDate.getDate() : this.newCoupon.endDate.getDate();
            month = (this.newCoupon.endDate.getMonth() + 1) < 10 ? '0' + (this.newCoupon.endDate.getMonth() + 1) : (this.newCoupon.endDate.getMonth() + 1);
            this.newCoupon.endDate = day + "/" + month + "/" + this.newCoupon.endDate.getFullYear();

            this.success = false;
            this.failure = false;
            var self = this;

            var promisePost = mainCompanyService.createCoupon(this.newCoupon);

            promisePost.then(function (resp) {

                self.coupons = resp.data;

                self.newCoupon = {};

                self.success = true;
                self.failure = false;

            }, function (err) {
                alert(err.data);
                self.success = false;
                self.failure = true;
            });
        }
    }

})();