System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/router", "@angular/http", "./app.component", "./header.component", "./film.component", "./films-list/film-item.component", "./films-list/film-list.component", "./films-detail/film-detail.component", "./shopping-list/shopping-list.component", "./shopping-list/shopping-list-add.component", "./film-start.component", "./film-edit/film-edit.component", "./dropdown.directive", "./film.service", "./shopping-list/shopping-list.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, forms_2, router_1, http_1, app_component_1, header_component_1, film_component_1, film_item_component_1, film_list_component_1, film_detail_component_1, shopping_list_component_1, shopping_list_add_component_1, film_start_component_1, film_edit_component_1, dropdown_directive_1, film_service_1, shopping_list_service_1, itemRoutes, appRoutes, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
                forms_2 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (film_component_1_1) {
                film_component_1 = film_component_1_1;
            },
            function (film_item_component_1_1) {
                film_item_component_1 = film_item_component_1_1;
            },
            function (film_list_component_1_1) {
                film_list_component_1 = film_list_component_1_1;
            },
            function (film_detail_component_1_1) {
                film_detail_component_1 = film_detail_component_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
            },
            function (shopping_list_add_component_1_1) {
                shopping_list_add_component_1 = shopping_list_add_component_1_1;
            },
            function (film_start_component_1_1) {
                film_start_component_1 = film_start_component_1_1;
            },
            function (film_edit_component_1_1) {
                film_edit_component_1 = film_edit_component_1_1;
            },
            function (dropdown_directive_1_1) {
                dropdown_directive_1 = dropdown_directive_1_1;
            },
            function (film_service_1_1) {
                film_service_1 = film_service_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }
        ],
        execute: function () {
            // определение дочерних маршрутов
            itemRoutes = [
                { path: '', component: film_start_component_1.FilmStartComponent },
                { path: 'new', component: film_edit_component_1.FilmEditComponent },
                { path: ':id', component: film_detail_component_1.FilmDetailComponent },
                { path: ':id/edit', component: film_edit_component_1.FilmEditComponent }
            ];
            appRoutes = [
                { path: '', redirectTo: '/films', pathMatch: 'full' },
                { path: 'films', component: film_component_1.FilmComponent, children: itemRoutes },
                { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
            ];
            AppModule = (function () {
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
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=app.module.js.map
