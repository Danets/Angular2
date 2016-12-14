import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

import { FilmService }  from '../film.service';
import { Item } from '../item';

@Component({
  selector: 'film-edit',
  templateUrl: './app/film-edit/film-edit.component.html'
})

export class FilmEditComponent implements OnInit, OnDestroy {
	filmForm: FormGroup;
  private filmIndex: number;
  private film: Item;
  private isNew = true;
  private subscription: Subscription;


  constructor(private route: ActivatedRoute, private filmService: FilmService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
  	 this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.filmIndex = +params['id'];
          this.film = this.filmService.getFilm(this.filmIndex);
        } else {
          this.isNew = true;
          this.film = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newFilm = this.filmForm.value;
    if (this.isNew) {
      this.filmService.addFilm(newFilm);
    } else {
      this.filmService.editFilm(this.film, newFilm);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
    (<FormArray>this.filmForm.controls['movies']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [
          Validators.required,
          Validators.pattern("\\d+")
        ])
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.filmForm.controls['movies']).removeAt(index);
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let filmName = '';
    let filmImageUrl = '';
    let filmContent = '';
    let filmMovies: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.film.hasOwnProperty('movies')) {
        for (let i = 0; i < this.film.movies.length; i++) {
          filmMovies.push(
            new FormGroup({
              name: new FormControl(this.film.movies[i].name, Validators.required),
              amount: new FormControl(this.film.movies[i].amount, [
                Validators.required,
                Validators.pattern("\\d+")
              ])
            })
          );
        }
      }
      filmName = this.film.name;
      filmImageUrl = this.film.imagePath;
      filmContent = this.film.description;
    }
    this.filmForm = this.formBuilder.group({
      name: [filmName, Validators.required],
      imagePath: [filmImageUrl, Validators.required],
      description: [filmContent, Validators.required],
      movies: filmMovies
    });
  }


}
