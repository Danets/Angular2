import { Component } from '@angular/core';
import { FilmService }  from './film.service';

@Component({
  selector: 'header',
  templateUrl: './app/header.component.html'
})
export class HeaderComponent {

  constructor(private filmService: FilmService) {}

  ngOnInit() {
  }

  onStore() {
  	this.filmService.storeData().subscribe(
  		data => console.log(data),
  		error => console.error(error)
  	);
  }

  onFetch() {
  	this.filmService.fetchData();
  }

}
