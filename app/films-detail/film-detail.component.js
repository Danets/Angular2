System.register(["@angular/core", "@angular/router", "../shopping-list/shopping-list.service", "../film.service"], function (exports_1, context_1) {
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
    var core_1, router_1, shopping_list_service_1, film_service_1, FilmDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (film_service_1_1) {
                film_service_1 = film_service_1_1;
            }
        ],
        execute: function () {
            FilmDetailComponent = (function () {
                function FilmDetailComponent(sls, router, activateRoute, filmService) {
                    this.sls = sls;
                    this.router = router;
                    this.activateRoute = activateRoute;
                    this.filmService = filmService;
                }
                FilmDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.activateRoute.params.subscribe(function (params) {
                        _this.filmIndex = +params['id'];
                        _this.selectedItem = _this.filmService.getFilm(_this.filmIndex);
                    });
                };
                FilmDetailComponent.prototype.onEdit = function () {
                    this.router.navigate(['/films', this.filmIndex, 'edit']);
                };
                FilmDetailComponent.prototype.onDelete = function () {
                    this.filmService.deleteFilm(this.selectedItem);
                    this.router.navigate(['/films']);
                };
                FilmDetailComponent.prototype.onAddToShoppingList = function () {
                    this.sls.addItems(this.selectedItem.movies);
                };
                FilmDetailComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return FilmDetailComponent;
            }());
            FilmDetailComponent = __decorate([
                core_1.Component({
                    selector: 'film-detail',
                    templateUrl: './app/films-detail/film-detail.component.html'
                }),
                __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService, router_1.Router,
                    router_1.ActivatedRoute,
                    film_service_1.FilmService])
            ], FilmDetailComponent);
            exports_1("FilmDetailComponent", FilmDetailComponent);
        }
    };
});

//# sourceMappingURL=film-detail.component.js.map
