import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  moviesdata = '/api/movies-list';
  
 
  // config = new Observable(s=>{
  //     s.next(this.data)
  // });

  constructor(private http: HttpClient) {}
  getConfig() {
    //console.log(this.moviesdata)
    return this.http.get(this.moviesdata);
  }
 
  getdatabyid(id){
    return this.http.get(this.moviesdata);
  }
}
