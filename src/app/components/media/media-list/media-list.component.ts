import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { MediaService } from 'src/app/services/media.service';
import { MediaList } from '../../../interfaces/media-list';
import { Media } from 'src/app/interfaces/media';

@Component({
	selector: 'media-list',
	templateUrl: './media-list.component.html',
	styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
	@Input() mediaUrl: string;
	// searchTypes: Object = {
	// 	theater: 'nowPlaying',
	// 	popMovies: 'popularMovies',
	// 	popTv: 'popularTv',
	// 	upcoming: 'upcoming'
	// };
	mediaItems: MediaList[] = [];
	dates: Object;
	page: string = '2';
	// page: string = this.activatedRoute.url.subscribe(url => url[1].path);
	// page: Object = this.route.params.subscribe(response => console.log(response.page));
	path; // = this.activatedRoute.url; //.subscribe(url => url[1].path);
	route = this.path ? this.activatedRoute.url.subscribe(url => url[1].path) : 'home';

	totalPages: string = '';
	totalResults: string = '';
	mediaItemPoster: string = 'https://image.tmdb.org/t/p/w200';

	constructor(
		private mediaService: MediaService,
		// private http: HttpClient,
		private activatedRoute: ActivatedRoute
	) {
		this.getMedia();
		// this.path = this.activatedRoute.url.subscribe(url => url); //[1].path);
		// console.log(this.route);
		// console.log(this.path);

		// console.log(this.activatedRoute.url.subscribe(url => url));
		console.log(this.mediaUrl);
		console.log('movie-list-component');
	}

	ngOnInit() {}

	/** Get Media */
	getMedia() {
		// this.mediaService.getMedia('nowPlaying').subscribe(media => {
		this.mediaService.getMedia('nowPlaying').subscribe(media => {
			// this.movies.push(movies.results);////////////////////////////////////////
			this.mediaItems = media['results'];
			this.dates = media['dates'];
			this.totalPages = media['total_pages'];
			this.totalResults = media['total_results'];
			// console.log(this.movies);
			// console.log(movies);
		});
	}
}
