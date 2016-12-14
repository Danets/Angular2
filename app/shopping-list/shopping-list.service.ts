import {Movie} from '../movie';

export class ShoppingListService{
     private items: Movie[] = [];

    constructor() {}
   
   getItems() {
   	return this.items;
   }

   addItems(items: Movie[]) {
   		Array.prototype.push.apply(this.items, items);
   }

    addItem(item: Movie) {
   		this.items.push(item);
   }

   editItem(oldItem: Movie, newItem: Movie) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }
  
  deleteItem(item: Movie) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}