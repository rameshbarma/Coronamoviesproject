import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  data = '/api/categoies';
  selectedCategories: any = [];

  categories = new Subject();
 

  constructor(private http: HttpClient) {
  }
  getConfig() {
    //console.log(this.data);
    return this.http.get(this.data);
  }
  setCategories(selectedItem) {
    //this.selectedCategories.concat(selectedItem);

    this.selectedCategories = this.selectedCategories.concat(selectedItem);
    return this.getCategories();
  }
  removeCategories(item) {
    const items = this.selectedCategories.filter((i) => {
      return i.id !== item.id;
    });

    this.selectedCategories = items;
    return this.getCategories();
  }
  getCategories() {
    this.categories.next(this.selectedCategories.map(i=> i.id))
    return this.categories;
  }
}
