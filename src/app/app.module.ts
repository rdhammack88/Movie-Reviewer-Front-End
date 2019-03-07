import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import 'jquery';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaCardComponent } from './components/media/media-cards/media-card.component';
import { MediaListComponent } from './components/media/media-list/media-list.component';
import { MediaService } from './services/media.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		MediaCardComponent,
		MediaListComponent,
		SummaryPipe,
		HomeComponent,
		NavigationComponent,
		AboutComponent,
		MoviesListComponent,
		TvListComponent,
		NotFoundComponent,
		FooterComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterializeModule],
	providers: [MediaService],
	bootstrap: [AppComponent]
})
export class AppModule {}
