System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Movie;
    return {
        setters: [],
        execute: function () {
            Movie = (function () {
                function Movie(name, amount) {
                    this.name = name;
                    this.amount = amount;
                }
                return Movie;
            }());
            exports_1("Movie", Movie);
        }
    };
});

//# sourceMappingURL=movie.js.map
