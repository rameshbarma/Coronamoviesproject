import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderimageComponent } from './headerimage/headerimage.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';




// components
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MoviesComponent} from './categoreis/categories.component'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

// services
import { MovieDataService} from './categoreis/catagories.service';
import { RatingComponent } from './rating/rating.component';
import { UserreviewComponent } from './userreview/userreview.component';
import {  MovieListService } from './movielist/movieslist.service';
import { FilterPipe } from './movielist/filter.pipe';











@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HeaderimageComponent,
    MainComponent,
    NavComponent,
    MovielistComponent,
    MoviesComponent,
    MoviedetailsComponent,
    RatingComponent,
    UserreviewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTabsModule,
    HttpClientModule
    
    
  ],
  providers: [MovieDataService, MovieListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
