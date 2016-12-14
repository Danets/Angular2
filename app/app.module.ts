import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms'; // DATA-DRIVEN!!!
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }   from '@angular/http'; // HTTP

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header.component';
import { FilmComponent }  from './film.component';
import { FilmItemComponent }  from './films-list/film-item.component';
import { FilmListComponent }  from './films-list/film-list.component';
import { FilmDetailComponent }  from './films-detail/film-detail.component';
import { ShoppingListComponent }  from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent }  from './shopping-list/shopping-list-add.component';
import { FilmStartComponent }  from './film-start.component';
import { FilmEditComponent }  from './film-edit/film-edit.component';

import { DropdownDirective }  from './dropdown.directive';

import { FilmService }  from './film.service';
import { ShoppingListService }  from './shopping-list/shopping-list.service';

// определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: '', component: FilmStartComponent},
    { path: 'new', component: FilmEditComponent},
    { path: ':id', component: FilmDetailComponent},
    { path: ':id/edit', component: FilmEditComponent}
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmComponent, children: itemRoutes },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  AppComponent,
  HeaderComponent,
  FilmComponent,
  FilmItemComponent,
  FilmListComponent, FilmDetailComponent,
  ShoppingListComponent,
  ShoppingListAddComponent,
  DropdownDirective,
  FilmStartComponent,
  FilmEditComponent
  ],
  providers: [FilmService, ShoppingListService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }