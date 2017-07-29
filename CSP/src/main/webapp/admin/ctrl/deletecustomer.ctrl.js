(function () {

    var module = angular.module("CSP");

    module.controller("DeleteCustomerCtrl", DeleteCustomerCtrlCtor);

    function DeleteCustomerCtrlCtor(mainAdminServiceHTTP) {
        this.customers = [];
        var self = this;

        var promiseGet = mainAdminServiceHTTP.getAllCustomers();
        promiseGet.then(
            function (resp) {

                self.customers = resp.data;

            },
            function (err) {
                alert(err.data);
            });


        this.deleteCustomer = function (c) {
            var promiseDelete = mainAdminServiceHTTP.deleteCustomer(c.id);
            promiseDelete.then(
                function (resp) {

                    location.reload();

                },
                function (err) {
                    alert(err.data);
                });
        };

        // set table order /********************** */
        this.orderB = "";
        this.goUp = false;

        this.setOrder = function (field) {
            this.goUp = (this.orderB != field) ? false
                : !this.goUp;
            this.orderB = field;
        }


    }

})();