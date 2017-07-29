(function () {

    var module = angular.module("CSP");

    module.controller("UpdateCompanyCtrl", UpdateCompanyCtrlCtor);

    function UpdateCompanyCtrlCtor(mainAdminServiceHTTP) {
        this.companies = [];
        var self = this;

        //this.updatedCompany = {};

        var promiseGet = mainAdminServiceHTTP.getAllCompanies();
        promiseGet.then(
            function (resp) {
                //alert(resp.data);
                self.companies = resp.data;

            },
            function (err) {
                alert(err.data);
            });

        this.success = false;
        this.failure = false;

        this.updateCompany = function () {
            alert();
            console.log(this.updatedCompany);
            var promisePost = mainAdminServiceHTTP.updateCompany(this.updatedCompany);
            promisePost.then(
                function (resp) {

                    alert(" The Company Was Successfully Updated");
                    companies = resp.data;
                    self.success = true;
                    self.failure = false;

                    var promiseGet = mainAdminServiceHTTP.getAllCompanies();
                    promiseGet.then(
                        function (resp) {
                            //alert(resp.data);
                            self.companies = resp.data;

                        },
                        function (err) {
                            alert(err.data);
                        });
                },
                function (err) {
                    alert(err.data);
                    self.success = false;
                    self.failure = true;
                });

        };
        //************************************//

        this.updateMode = function (c) {
            for (var i = 0; i < this.companies.length; i++) {
                this.companies[i].edit = false;

            }
            c.edit = true;
            this.updatedCompany = {};

            this.updatedCompany.id = c.id;

            this.updatedCompany.compName = c.compName;
            console.log(this.updatedCompany);

        };
        this.closeUpdateMode = function (c) {
            for (var i = 0; i < this.companies.length; i++) {
                this.companies[i].edit = false;
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