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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var film_service_1 = require("../film.service");
var FilmEditComponent = (function () {
    function FilmEditComponent(route, filmService, formBuilder, router) {
        this.route = route;
        this.filmService = filmService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isNew = true;
    }
    FilmEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.isNew = false;
                _this.filmIndex = +params['id'];
                _this.film = _this.filmService.getFilm(_this.filmIndex);
            }
            else {
                _this.isNew = true;
                _this.film = null;
            }
            _this.initForm();
        });
    };
    FilmEditComponent.prototype.onSubmit = function () {
        var newFilm = this.filmForm.value;
        if (this.isNew) {
            this.filmService.addFilm(newFilm);
        }
        else {
            this.filmService.editFilm(this.film, newFilm);
        }
        this.navigateBack();
    };
    FilmEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    FilmEditComponent.prototype.onAddItem = function (name, amount) {
        this.filmForm.controls['movies'].push(new forms_1.FormGroup({
            name: new forms_1.FormControl(name, forms_1.Validators.required),
            amount: new forms_1.FormControl(amount, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("\\d+")
            ])
        }));
    };
    FilmEditComponent.prototype.onRemoveItem = function (index) {
        this.filmForm.controls['movies'].removeAt(index);
    };
    FilmEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FilmEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    FilmEditComponent.prototype.initForm = function () {
        var filmName = '';
        var filmImageUrl = '';
        var filmContent = '';
        var filmMovies = new forms_1.FormArray([]);
        if (!this.isNew) {
            if (this.film.hasOwnProperty('movies')) {
                for (var i = 0; i < this.film.movies.length; i++) {
                    filmMovies.push(new forms_1.FormGroup({
                        name: new forms_1.FormControl(this.film.movies[i].name, forms_1.Validators.required),
                        amount: new forms_1.FormControl(this.film.movies[i].amount, [
                            forms_1.Validators.required,
                            forms_1.Validators.pattern("\\d+")
                        ])
                    }));
                }
            }
            filmName = this.film.name;
            filmImageUrl = this.film.imagePath;
            filmContent = this.film.description;
        }
        this.filmForm = this.formBuilder.group({
            name: [filmName, forms_1.Validators.required],
            imagePath: [filmImageUrl, forms_1.Validators.required],
            description: [filmContent, forms_1.Validators.required],
            movies: filmMovies
        });
    };
    return FilmEditComponent;
}());
FilmEditComponent = __decorate([
    core_1.Component({
        selector: 'film-edit',
        templateUrl: './app/film-edit/film-edit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, film_service_1.FilmService, forms_1.FormBuilder, router_1.Router])
], FilmEditComponent);
exports.FilmEditComponent = FilmEditComponent;
//# sourceMappingURL=film-edit.component.js.map