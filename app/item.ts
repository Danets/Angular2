import { Movie } from './movie';

export class Item{
    
    constructor(public name: string, public description: string, public imagePath: string, public movies: Movie[]) {
  	
    }
}