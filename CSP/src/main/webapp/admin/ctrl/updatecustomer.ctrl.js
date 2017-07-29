(function () {

    var module = angular.module("CSP");

    module.controller("UpdateCustomerCtrl", UpdateCustomerCtrlCtor);

    function UpdateCustomerCtrlCtor(mainAdminServiceHTTP) {
        this.customers = [];
        this.updateCustomer = {};
        var self = this;

        var promiseGet = mainAdminServiceHTTP.getAllCustomers();
        promiseGet.then(
            function (resp) {
                //alert(resp.data);
                self.customers = resp.data;

            },
            function (err) {
                alert(err.data);
            });

        this.updateCustomer = function () {

            var promisePost = mainAdminServiceHTTP.updateCustomer(this.updateCustomer);
            promisePost.then(
                function (resp) {

                    alert(" The Customer Was Successfully Updated");
                    self.customers = resp.data;

                },
                function (err) {
                    alert(err.data);
                });
        };
        //***************************************//

        this.updateMode = function (c) {
            for (var i = 0; i < this.customers.length; i++) {
                this.customers[i].edit = false;
            }
            c.edit = true;


        };
        this.closeUpdateMode = function (c) {
            for (var i = 0; i < this.customers.length; i++) {
                this.customers[i].edit = false;
            }
            c.edit = false;


        };


        //set order table/************************ */

        this.orderB = "";
        this.goUp = false;

        this.setOrder = function (field) {
            this.goUp = (this.orderB != field) ? false
                : !this.goUp;
            this.orderB = field;
        }

    }

})();
