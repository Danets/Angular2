System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Item;
    return {
        setters: [],
        execute: function () {
            Item = (function () {
                function Item(name, description, imagePath, movies) {
                    this.name = name;
                    this.description = description;
                    this.imagePath = imagePath;
                    this.movies = movies;
                }
                return Item;
            }());
            exports_1("Item", Item);
        }
    };
});

//# sourceMappingURL=item.js.map
