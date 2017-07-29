(function () {

    var module = angular.module("CSP");

    module.service("mainCustomerServiceHTTP", mainCustomerServiceCtor);

    function mainCustomerServiceCtor($http) {

        // getAllPurchasedCoupons //************************* */
        this.getAllPurchasedCoupons = function (idcoup) {
            return $http.get('http://localhost:8080/CSP/webapi/customerservice/getallpurchasedcoupons');
        };

        // purchaseCoupon //****************************************** */
        this.purchaseCoupon = function (id) {
            return $http.post('http://localhost:8080/CSP/webapi/customerservice/purchasecoupon/' + id);
        };

        // get Coupons By Type //**************************************** */
        this.getCouponsByType = function (type) {
            return $http.get('http://localhost:8080/CSP/webapi/customerservice/getallpurchasedcouponsbytype/' + type);
        };

        // get Coupons By Price //*************************************** */
        this.getAllPurchasedCouponsByMaxPrice = function (price) {
            return $http.get('http://localhost:8080/CSP/webapi/customerservice/getallpurchasedcouponbyprice/' + price);
        }
    }

})();