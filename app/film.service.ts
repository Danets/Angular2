import {Injectable, EventEmitter} from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

import {Item} from './item';
import {Movie} from './movie';

@Injectable() 
export class FilmService{
 filmsChanged = new EventEmitter<Item[]>();

    private films: Item[] = [
      new Item('Выживший', 'History', 'http://www.theshiznit.co.uk/media/2016/January/revenant.jpg', [
        new Movie('Action', 2),
        new Movie('Horor', 5)
      	]),
      new Item('DEADPOOL', 'Action', 'https://s-media-cache-ak0.pinimg.com/564x/f0/86/d7/f086d7dc68221aaebf5bb96bd714376e.jpg', [
        ])
    ];
    constructor(private http: Http) {}

    getFilms() {
        return this.films;
    }
   
   getFilm(id: number) {
     return this.films[id];
   }

   deleteFilm(film: Item) {
     this.films.splice(this.films.indexOf(film), 1);
   }

   addFilm(film: Item) {
    this.films.push(film);
  }

  editFilm(oldFilm: Item, newFilm: Item) {
    this.films[this.films.indexOf(oldFilm)] = newFilm;
  }

  storeData() {
    const body = JSON.stringify(this.films);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://filmsapp-97d0c.firebaseio.com/films.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://filmsapp-97d0c.firebaseio.com/films.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Item[]) => {
          this.films = data;
          this.filmsChanged.emit(this.films);
        }
      )
  }    
}