(function () {

    var module = angular.module("CSP");

    module.controller("DeleteCompanyCtrl", DeleteCompanyCtrlCtor);

    function DeleteCompanyCtrlCtor(mainAdminServiceHTTP) {
        this.companies = [];
        var self = this;

        var promiseGet = mainAdminServiceHTTP.getAllCompanies();
        promiseGet.then(
            function (resp) {
                self.companies = resp.data;
                console.log(resp.data);

            },
            function (err) {
                alert(err.data);
            });

        this.deleteCompany = function (c) {
            var promiseDelete = mainAdminServiceHTTP.deleteCompany(c.id);
            promiseDelete.then(
                function (resp) {

                    location.reload();
//            	var promiseGet = mainAdminServiceHTTP.getAllCompanies();
//                promiseGet.then(
//                    function (resp) {
//                    	
//                        self.companies = resp.data;
//
//                    },
//                    function (err) {
//                        alert(err.data);
//                    });

                },
                function (err) {
                    alert(err.data);
                });
        };
        //****************************************************** */
        // set table order /********************** */
        this.orderB = "";
        this.goUp = false;

        this.setOrder = function (field) {
            this.goUp = (this.orderB != field) ? false
                : !this.goUp;
            this.orderB = field;
        };

        this.pressDeleteForDeletion = function () {
            this.delete = !this.delete;
        }

    }

})();