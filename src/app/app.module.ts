import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaCardComponent } from './components/media/media-cards/media-card.component';
import { MediaListComponent } from './components/media/media-list/media-list.component';
import { MediaService } from './services/media.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
	declarations: [
		AppComponent,
		MediaCardComponent,
		MediaListComponent,
		SummaryPipe,
		HomeComponent,
		NavigationComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [MediaService],
	bootstrap: [AppComponent]
})
export class AppModule {}
