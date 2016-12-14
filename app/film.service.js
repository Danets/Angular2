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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var item_1 = require("./item");
var movie_1 = require("./movie");
var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
        this.filmsChanged = new core_1.EventEmitter();
        this.films = [
            new item_1.Item('Выживший', 'History', 'http://www.theshiznit.co.uk/media/2016/January/revenant.jpg', [
                new movie_1.Movie('Action', 2),
                new movie_1.Movie('Horor', 5)
            ]),
            new item_1.Item('DEADPOOL', 'Action', 'https://s-media-cache-ak0.pinimg.com/564x/f0/86/d7/f086d7dc68221aaebf5bb96bd714376e.jpg', [])
        ];
    }
    FilmService.prototype.getFilms = function () {
        return this.films;
    };
    FilmService.prototype.getFilm = function (id) {
        return this.films[id];
    };
    FilmService.prototype.deleteFilm = function (film) {
        this.films.splice(this.films.indexOf(film), 1);
    };
    FilmService.prototype.addFilm = function (film) {
        this.films.push(film);
    };
    FilmService.prototype.editFilm = function (oldFilm, newFilm) {
        this.films[this.films.indexOf(oldFilm)] = newFilm;
    };
    FilmService.prototype.storeData = function () {
        var body = JSON.stringify(this.films);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://filmsapp-97d0c.firebaseio.com/films.json', body, { headers: headers });
    };
    FilmService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('https://filmsapp-97d0c.firebaseio.com/films.json')
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.films = data;
            _this.filmsChanged.emit(_this.films);
        });
    };
    return FilmService;
}());
FilmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FilmService);
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map