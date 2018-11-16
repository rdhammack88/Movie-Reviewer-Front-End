import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { HomeComponent } from './components/home/home.component';

@NgModule({
	declarations: [AppComponent, MovieComponent, MovieListComponent, SummaryPipe, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [MovieService],
	bootstrap: [AppComponent]
})
export class AppModule {}
