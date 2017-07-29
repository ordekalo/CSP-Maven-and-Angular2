(function () {

    var module = angular.module("CSP");

    module.service("mainCompanyService", mainCompanyServiceCtor);


    function mainCompanyServiceCtor($q, $http) {

        // create coupon ()
        this.createCoupon = function (coupon) {
            return $http.post('http://localhost:8080/CSP/webapi/companyservice/createcoupon', coupon);
        };

        // delete coupon //************************* */
        this.deleteCoupon = function (idCoup) {
            return $http.delete('http://localhost:8080/CSP/webapi/companyservice/deletecoupon/' + idCoup);
        };

        // update coupon //************************ */
        this.updateCoupon = function (updatedCoupon) {
            return $http.put('http://localhost:8080/CSP/webapi/companyservice/updatecoupon', updatedCoupon);
        };

        // get All Coupons //************************* */
        this.getAllCoupons = function () {
            return $http.get('http://localhost:8080/CSP/webapi/companyservice/getallcoupons');
        };

        // get Coupon By Id //************************* */
        this.getCouponById = function (idNum) {
            return $http.get('http://localhost:8080/CSP/webapi/companyservice/getcoupon/' + idNum);
        };

        // get Coupons By Type //************************* */
        this.getCouponsByType = function (type) {
            return $http.get('http://localhost:8080/CSP/webapi/companyservice/getcouponsbytype/' + type);
        };

        // get Coupons By Price //************************* */
        this.getCouponsByPrice = function (price) {
            return $http.get('http://localhost:8080/CSP/webapi/companyservice/getcouponsbymaxprice/' + price);
        };

        // //get Coupons By Date //************************* */
        this.getCouponsByDate = function (myDate) {
            return $http.get('http://localhost:8080/CSP/webapi/companyservice/getcouponsbyenddate/' + myDate);
        };

        // get company ()
        this.getCompany = function (compId) {
            return $http.get('http://localhost:8080/CSP/webapi/companyservice/currentcompany/' + compId);

        }

    }

})();