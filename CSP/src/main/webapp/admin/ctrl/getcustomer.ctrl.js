(function () {

    var module = angular.module("CSP");

    module.controller("GetCustomerCtrl", GetCustomerCtrlCtor);

    function GetCustomerCtrlCtor(mainAdminServiceHTTP) {
        var customer = {};
        var self = this;


        this.getId = function () {

            var promiseGet = mainAdminServiceHTTP.getCustomerById(this.id);

            promiseGet.then(
                function (resp) {

                    self.customer = resp.data;
                    console.log(customer);
                },
                function (err) {
                    alert(err.data);
                });

        }
    }

})();