import { Component, OnInit } from '@angular/core';
import { MovieDataService } from './catagories.service';

@Component({
  selector: 'app-movies',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class MoviesComponent implements OnInit {
  categories: any = [];
  constructor(private movielistservice: MovieDataService) {}
 checkvalues: any =[];
  ngOnInit() {
    this.getHeroes();
    
    //console.log(this.movielistservice.getConfig())
  }
  getHeroes(): void {
    //this.categories = this.movielistservice.getConfig();

    this.movielistservice.getConfig().subscribe((categories: any) => {
      //console.log(categories);
      this.categories = categories.data;
    });
  }
  onChange(value,item) {
    //console.log('checkbox',value,item);
    if(value.checked){
     this.checkvalues.push(item);
     //console.log(this.checkvalues);
     this.movielistservice.setCategories(item)
    }else{
      this.movielistservice.removeCategories(item)
     
    }
    
  }
 
}
