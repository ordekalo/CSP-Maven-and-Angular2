(function () {

    var module = angular.module("CSP");

    module.controller("GetAllCompaniesCtrl", GetAllCompaniesCtrlCtor);

    function GetAllCompaniesCtrlCtor(mainAdminServiceHTTP) {
        this.companies = [];
        var self = this;

        var promise = mainAdminServiceHTTP.getAllCompanies();
        promise.then(
            function (resp) {

                self.companies = resp.data;

                console.log(self.companies)
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