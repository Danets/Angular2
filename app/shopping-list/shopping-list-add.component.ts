import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'shopping-list-add',
  templateUrl: './app/shopping-list/shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
 @Input() item: Movie;
 @Output() cleared = new EventEmitter();
 isAdd = true;

  constructor(private sls: ShoppingListService) {}

   ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(movie: Movie) {
    const newMovie = new Movie(movie.name, movie.amount);
    if(!this.isAdd) {
  		this.sls.editItem(this.item, newMovie);
      this.onClear();
  	} else {
  		this.item = newMovie;
  		this.sls.addItem(this.item);
  	}
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
  
}
