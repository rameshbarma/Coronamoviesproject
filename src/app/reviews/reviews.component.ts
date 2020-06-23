import { Component, OnInit } from '@angular/core';
import {ReviewsService } from './reviews.services';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: any = [];
  constructor( private reviewService:ReviewsService) { }

  ngOnInit() {
 this.getReview();
  }
  getReview(): void {
  this.reviewService.reviewConfig().subscribe((reviews:any) =>{
 console.log(reviews)
 this.reviews =reviews;
  })
  }

}
