import { Component, OnInit } from '@angular/core';
import { FilmService }  from '../film.service';

import { Item } from '../item';

@Component({
  selector: 'film-list',
  templateUrl: './app/films-list/film-list.component.html'
})
export class FilmListComponent implements OnInit {
  films: Item[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.films = this.filmService.getFilms();
    this.filmService.filmsChanged.subscribe(
    	(films: Item[]) => this.films = films
    );
  }
  
}
