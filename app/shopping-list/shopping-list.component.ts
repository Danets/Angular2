import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ShoppingListService } from './shopping-list.service';



@Component({
  selector: 'shopping-list',
  templateUrl: './app/shopping-list/shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
	items: Movie[] = [];
  selectedItem: Movie = null;

  constructor(private sls: ShoppingListService) {}

  ngOnInit() {
  	this.items = this.sls.getItems();
  }

 onSelectItem(item: Movie) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
