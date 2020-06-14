import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movielist/movieslist.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movie:any;

  constructor(private route: ActivatedRoute,  private movielistdataservice: MovieListService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movielistdataservice.getdatabyid(id).subscribe((response:any)=>{
      console.log(id);
      //console.log(data)
          //this.movies = response.data;
          console.log(response.data)
          const movie = response.data.movies.filter((item) => {  
            console.log(item.imdb_id ===id);
            return item.imdb_id ===id
          });
          const [{ tmdb_data, ...rest }] = movie;
    
            
             
this.movie ={ ...rest, ...tmdb_data };
console.log(this.movie);
         })

  }

  Categories(movieList){
    const movieTitles = movieList.map(i => i.name).join(', ');
   return movieTitles;
    //console.log(movieTitles)
  }

  
}
