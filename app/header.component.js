System.register(["@angular/core", "./film.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, film_service_1, HeaderComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (film_service_1_1) {
                film_service_1 = film_service_1_1;
            }
        ],
        execute: function () {
            HeaderComponent = (function () {
                function HeaderComponent(filmService) {
                    this.filmService = filmService;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                HeaderComponent.prototype.onStore = function () {
                    this.filmService.storeData().subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
                };
                HeaderComponent.prototype.onFetch = function () {
                    this.filmService.fetchData();
                };
                return HeaderComponent;
            }());
            HeaderComponent = __decorate([
                core_1.Component({
                    selector: 'header',
                    templateUrl: './app/header.component.html'
                }),
                __metadata("design:paramtypes", [film_service_1.FilmService])
            ], HeaderComponent);
            exports_1("HeaderComponent", HeaderComponent);
        }
    };
});

//# sourceMappingURL=header.component.js.map
