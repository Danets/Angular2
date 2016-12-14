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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms"); // DATA-DRIVEN!!!
var router_1 = require("@angular/router");
var http_1 = require("@angular/http"); // HTTP
var app_component_1 = require("./app.component");
var header_component_1 = require("./header.component");
var film_component_1 = require("./film.component");
var film_item_component_1 = require("./films-list/film-item.component");
var film_list_component_1 = require("./films-list/film-list.component");
var film_detail_component_1 = require("./films-detail/film-detail.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var shopping_list_add_component_1 = require("./shopping-list/shopping-list-add.component");
var film_start_component_1 = require("./film-start.component");
var film_edit_component_1 = require("./film-edit/film-edit.component");
var dropdown_directive_1 = require("./dropdown.directive");
var film_service_1 = require("./film.service");
var shopping_list_service_1 = require("./shopping-list/shopping-list.service");
// определение дочерних маршрутов
var itemRoutes = [
    { path: '', component: film_start_component_1.FilmStartComponent },
    { path: 'new', component: film_edit_component_1.FilmEditComponent },
    { path: ':id', component: film_detail_component_1.FilmDetailComponent },
    { path: ':id/edit', component: film_edit_component_1.FilmEditComponent }
];
var appRoutes = [
    { path: '', redirectTo: '/films', pathMatch: 'full' },
    { path: 'films', component: film_component_1.FilmComponent, children: itemRoutes },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            film_component_1.FilmComponent,
            film_item_component_1.FilmItemComponent,
            film_list_component_1.FilmListComponent, film_detail_component_1.FilmDetailComponent,
            shopping_list_component_1.ShoppingListComponent,
            shopping_list_add_component_1.ShoppingListAddComponent,
            dropdown_directive_1.DropdownDirective,
            film_start_component_1.FilmStartComponent,
            film_edit_component_1.FilmEditComponent
        ],
        providers: [film_service_1.FilmService, shopping_list_service_1.ShoppingListService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map