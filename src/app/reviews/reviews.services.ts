import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ReviewsService {
    reviewsData = '/api/review';

    constructor(private http: HttpClient) {}
    reviewConfig(){
        console.log(this.reviewsData)
        return this.http.get(this.reviewsData);
    }
    // reviewConfig() {
    //   //console.log(this.reviewsData)
    //   return this.http.get(this.reviewsData);
    // }
   
    // reviewDataById(id){
    //   return this.http.get(this.reviewsData);
    // }
    
}