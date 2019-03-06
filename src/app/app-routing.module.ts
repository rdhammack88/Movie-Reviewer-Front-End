import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Import of Components */
import { HomeComponent } from './components/home/home.component';
import { MediaListComponent } from './components/media/media-list/media-list.component';
import { MediaCardComponent } from './components/media/media-cards/media-card.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'movies', component: HomeComponent },
	{ path: 'tv', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'media/:id', component: MediaCardComponent },
	{ path: 'theater/:page', component: MediaListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
