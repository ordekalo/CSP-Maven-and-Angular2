(function () {

    var module = angular.module("CSP");

    module.controller("GetAllCustomersCtrl", GetAllCustomersCtrlCtor);

    function GetAllCustomersCtrlCtor(mainAdminServiceHTTP) {
        this.customers = [];
        var self = this;

        var promise = mainAdminServiceHTTP.getAllCustomers();
        promise.then(
            function (resp) {
                //alert(resp.data);
                self.customers = resp.data;

            },
            function (err) {
                alert(err.data);
            });
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