import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MoviesComponent } from './categoreis/categories.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'moviesdetais/:id', component: MoviedetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
