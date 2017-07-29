System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer;
    return {
        setters:[],
        execute: function() {
            class Customer {
                constructor(id, custName) {
                    this.id = id;
                    this.custName = custName;
                }
            }
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=Customer.js.map