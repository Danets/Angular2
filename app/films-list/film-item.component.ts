import { Component, Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'film-item',
  templateUrl: './app/films-list/film-item.component.html'
})
export class FilmItemComponent {
  @Input() film: Item;
  @Input() filmId: number;

  }
