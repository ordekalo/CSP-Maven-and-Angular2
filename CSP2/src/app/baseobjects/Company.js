System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Company;
    return {
        setters:[],
        execute: function() {
            class Company {
                constructor(id, compName, email) {
                    this.id = id;
                    this.compName = compName;
                    this.email = email;
                }
            }
            exports_1("Company", Company);
        }
    }
});
//# sourceMappingURL=Company.js.map