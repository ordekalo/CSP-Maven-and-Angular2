//(function () {
// 
//    var module = angular.module("couponSystem");
// 
//    module.controller("aboutCtrl", AboutCtrlCtor);
// 
//    function AboutCtrlCtor(mainCompanyService) {
//        this.coupons = [];
//        var self = this;
// 
//        var promise = mainCompanyService.getAllPurchasedCoupons();
//        promise.then(
//        function (resp) {
//            //alert(resp.data);
//            self.coupons = resp.data;
// 
//        },
//        function (err) {
//            alert(err.data);
//        });
// 
//    }
// 
//})();