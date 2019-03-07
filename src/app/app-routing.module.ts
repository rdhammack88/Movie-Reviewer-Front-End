import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Import of Components */
import { HomeComponent } from './components/home/home.component';
import { MediaListComponent } from './components/media/media-list/media-list.component';
import { MediaCardComponent } from './components/media/media-cards/media-card.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'movies', component: MoviesListComponent },
	{ path: 'tv', component: TvListComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'media/:id', component: MediaCardComponent },
	{ path: 'upcoming', component: MediaListComponent },
	{ path: 'nowPlaying', component: MediaListComponent },
	{ path: 'popularMovies', component: MediaListComponent },
	{ path: 'popularTv', component: MediaListComponent },

	{ path: 'theater/:page', component: MediaListComponent },
	{ path: '**', component: NotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
