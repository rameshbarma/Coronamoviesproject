import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies'
})
export class FilterPipe implements PipeTransform {

  transform(movies: unknown[], categories=[]): unknown {
    if(categories && categories.length){
  const movieList = movies.filter((i: any) =>{
   console.log(i.genres)
  const categoriesValue = i.genres.filter((item:any) => {
     //console.log(i.id);
     const findValue = categories.find(element => element === item.id);
     console.log(findValue);
     return findValue;
   })
  return categoriesValue.length;
    })
return movieList;
    
  }
  return movies;
}
}
