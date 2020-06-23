import { Component, OnInit, OnChanges } from '@angular/core';
import { MovieListService } from './movieslist.service';
import { MovieDataService } from '../categoreis/catagories.service';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
})
export class MovielistComponent implements OnInit, OnChanges {
  movies: any = [];
  filters: any = this.categoriesServices.getCategories();
  originalData: any = [];


  constructor(
    private movielistdataservice: MovieListService,
    private categoriesServices: MovieDataService
  ) {}

  ngOnInit() {
    this.getHeroes();
    // this.categoriesServices.getCategories().subscribe((i) => {
    //   // console.log('movie component for filter', i);
    //   this.filters = i;
    //   console.log(this.filters, this.movies.length, 'before filters applied')
      
    //   if(this.filters.length){
    //     this.movies = this.originalData.filter(i =>{
    //       // console.log(i.genres)
    //       const index: Number = i.genres.findIndex(i => this.filters.includes(i.id))
    //       // console.log(!!(index >= 0))
    //       return !!(index >= 0)
    //     })
      
    //   } else {
    //     this.movies = this.originalData
    //   }
    //   console.log(this.movies.length, 'after filters applied')
    // });
  }
  ngOnChanges(changes: any) {
    console.log(changes)
    // changes.prop contains the old and the new value...
  }

  getHeroes(): void {
    this.movielistdataservice.getConfig().subscribe((movieslist: any) => {
      //console.log( movieslist.data.movies);
      this.originalData = this.movies = movieslist.data.movies.map((item) => {
        const { tmdb_data, ...rest } = item;

        // const title= item.tmdb_data.title;
        // item.title= title
        return { ...rest, ...tmdb_data };
      });
      //console.log(this.movies)
    });
  }
  Categories(movieList){
    const movieTitles = movieList.map(i => i.name).join(', ');
   return movieTitles;
    //console.log(movieTitles)
  }
  
}
