(function () {

    var module = angular.module("CSP");

    module.controller("GetCompanyCtrl", GetCompanyCtrlCtor);

    function GetCompanyCtrlCtor(mainAdminServiceHTTP) {
        var company = {};
        var self = this;


        this.getId = function () {

            var promiseGet = mainAdminServiceHTTP.getCompanyById(this.id);

            promiseGet.then(
                function (resp) {
                    self.company = resp.data;
                },
                function (err) {
                    alert(err.data);
                });

        }
    }

})();