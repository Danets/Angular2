System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ShoppingListService;
    return {
        setters: [],
        execute: function () {
            ShoppingListService = (function () {
                function ShoppingListService() {
                    this.items = [];
                }
                ShoppingListService.prototype.getItems = function () {
                    return this.items;
                };
                ShoppingListService.prototype.addItems = function (items) {
                    Array.prototype.push.apply(this.items, items);
                };
                ShoppingListService.prototype.addItem = function (item) {
                    this.items.push(item);
                };
                ShoppingListService.prototype.editItem = function (oldItem, newItem) {
                    this.items[this.items.indexOf(oldItem)] = newItem;
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    this.items.splice(this.items.indexOf(item), 1);
                };
                return ShoppingListService;
            }());
            exports_1("ShoppingListService", ShoppingListService);
        }
    };
});

//# sourceMappingURL=shopping-list.service.js.map
