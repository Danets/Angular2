import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { FilmService }  from '../film.service';


import { Item } from "../item";


@Component({
  selector: 'film-detail',
  templateUrl: './app/films-detail/film-detail.component.html'
})
export class FilmDetailComponent implements OnInit, OnDestroy {
  selectedItem: Item;
  private filmIndex: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService, private router: Router,
   private activateRoute: ActivatedRoute,
   private filmService: FilmService
   ) {}

  ngOnInit() {
  	this.subscription = this.activateRoute.params.subscribe(
      (params: any) => {
  		this.filmIndex = +params['id'];
  		this.selectedItem = this.filmService.getFilm(this.filmIndex);
  	});
  }

onEdit() {
	this.router.navigate(['/films', this.filmIndex, 'edit']);
}

onDelete() {
		this.filmService.deleteFilm(this.selectedItem);
		this.router.navigate(['/films']);

}

onAddToShoppingList() {
	this.sls.addItems(this.selectedItem.movies);
}

ngOnDestroy() {
	this.subscription.unsubscribe();
}

}
