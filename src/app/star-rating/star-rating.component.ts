import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent implements OnInit {

  @Input() rating
  @Input() editable = false

  @Output() onRatingChange = new EventEmitter()

  stars = [0,0,0,0,0]
  filledStar = 0

  constructor() {
  }


  ngOnInit() {
    console.log(this.rating)
    if(this.rating){
     this.stars = this.fillStarts(this.rating)
    }
  }

  addRating(count){
    this.stars = this.fillStarts(count)
    this.rating = count
    this.onRatingChange.emit(count)
  }
  fillStars(count){
    if(this.editable){
      this.stars = this.fillStarts(count)
    }
  }


  fillStarts (rating){
    let stars = Array(5).fill(0) 
    
    for (let i = 0; i < rating; i++) {
      stars[i] = 1;
    }
    return stars
  }
  

}

