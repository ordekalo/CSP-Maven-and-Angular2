(function () {

    var module = angular.module("CSP");

    module.controller("updateCouponCtrl", updateCouponCtrlCtor);

    function updateCouponCtrlCtor(mainCompanyService) {

        this.coupons = [];
        var self = this;

//		self.coupons.endDate = new Date();
//		var dateString = self.coupons.endDate.getDate() + "/"
//				+ ("0" + (self.coupons.endDate.getMonth() + 1)).slice(-2) + "/"
//				+ ("0" + self.coupons.endDate.getFullYear());
//
//		alert(dateString);

        var promiseGet = mainCompanyService.getAllCoupons();

        promiseGet.then(function (resp) {

            self.coupons = resp.data;

        }, function (err) {
            alert(err.data);
        });

        this.updateTheCoupon = function (updatedCoupon) {

            //console.log(this.updatedCoupon);
            alert("1");
            var promisePost = mainCompanyService.updateCoupon(this.updatedCoupon);

            promisePost.then(function (resp) {

                self.coupons = resp.data;

                alert(" The Coupons Was Successfully Updated");
                location.reload();

            }, function (err) {
                alert(err.data);
            });
        };
        // open the update input in the table 1 row at the time

        this.updateMode = function (c) {
            for (var i = 0; i < this.coupons.length; i++) {
                this.coupons[i].edit = false;
            }
            c.edit = true;


        };
        this.closeUpdateMode = function (c) {
            for (var i = 0; i < this.coupons.length; i++) {
                this.coupons[i].edit = false;
            }
            c.edit = false;


        };

//
//		this.saveUpdate = function(c) {
//			coupons.forEach(self.coupons, function(c) {
//			var date = new Date(c.endDate);
//				if(!date.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/)) {
//				var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//		     	    var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
//		     	   c.endDate = day + "/" + month + "/" + date.getFullYear();
//		     	   return c.endDate;
//				}
//			});
//
//			mockServiceHTTP.updateCoupon(this.coupons);
//		}

        // set order table/************************ */
        this.orderB = "";
        this.goUp = false;

        this.setOrder = function (field) {
            this.goUp = (this.orderB != field) ? false : !this.goUp;
            this.orderB = field;
        }

    }

})();