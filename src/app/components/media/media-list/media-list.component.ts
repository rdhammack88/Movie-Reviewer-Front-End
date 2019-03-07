import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
export class MediaListComponent implements OnInit, AfterViewInit {
	// route = this.activatedRoute.snapshot.url[0].path || 'home';
	// @Input() mediaPathUrl: string = route === 'home' ? mediaPathUrl : route;

	// searchTypes: Object = {
	// 	theater: 'nowPlaying',
	// 	popMovies: 'popularMovies',
	// 	popTv: 'popularTv',
	// 	upcoming: 'upcoming'
	// };


	// mediaItemsList = {
	// 	mediaItems,
	// 	dates,
	// 	page,
	// 	totalPages,
	// 	totalResults,
	// 	mediaItemPoster
	// };


	@Input() mediaPathUrl: string;


	// mediaItemsList: {
	// 	mediaItems: MediaList[],
	// 	dates: Object,
	// 	page: number,
	// 	totalPages: number,
	// 	totalResults: number,
	// }

	mediaItemsList = {};

	mediaCategories = {
		'upcoming': 'Upcoming Movies',
		'nowPlaying': 'Now Playing',
		'popularMovies': 'Popular Movies',
		'popularTv': 'Popular Tv'
	}

	route = this.activatedRoute.snapshot.url.length ? this.activatedRoute.snapshot.url[0].path : 'home';
	mediaItemPoster: string = 'https://image.tmdb.org/t/p/w200';

	// path = this.activatedRoute.snapshot.url.length ? this.activatedRoute.snapshot.url[0].path : '';
	// route = this.path ? this.path : 'home';

	mediaItems: MediaList[] = [];
	dates: Object;
	page: number = 1;
	totalPages: number = 0;
	totalResults: number = 0;





	// // page: string = this.activatedRoute.url.subscribe(url => url[1].path);
	// // page: Object = this.route.params.subscribe(response => console.log(response.page));

	// path; // = this.activatedRoute.url; //.subscribe(url => url[1].path);

	// route = this.path ? this.activatedRoute.url.subscribe(url => url[1].path) : 'home';

	// mediaPathUrls: Array<string> = ['nowPlaying', 'popularMovies', 'popularTv', 'upcoming'];

	// path;
	// route = this.path ? this.activatedRoute.url.subscribe(url => url[1].path) : 'home';

	constructor(
		private mediaService: MediaService,
		private activatedRoute: ActivatedRoute
		// private http: HttpClient,
	) {
		// console.log(this.mediaPathUrl);
		// this.getMedia();

		// this.path = this.activatedRoute.url.subscribe(url => url); //[1].path);
		// console.log(this.route);
		// console.log(this.path);

		// console.log(this.activatedRoute.url.subscribe(url => url));
		// console.log(this.mediaPathUrl);

		// console.log('movie-list-component');

		// console.log(this.activatedRoute);
		// console.log(this.activatedRoute.url);

		// console.log(this.activatedRoute.snapshot.url[0].path); //.subscribe(url => url[1].path))


		// console.log(this.activatedRoute.snapshot);

		// this.mediaPathUrl = this.route === 'home' ? this.mediaPathUrl : this.route;
		// console.log(this.route);
	}

	ngOnInit() {
		this.mediaPathUrl = this.route === 'home' ? this.mediaPathUrl : this.route;
		this.getMedia(this.mediaPathUrl);
		console.log(this.route);
		console.log(this.mediaPathUrl);
		console.log(this.activatedRoute.snapshot);

		// this.mediaItemsList = {
		// 	mediaItems: this.mediaItems,
		// 	dates: this.dates,
		// 	page: this.page,
		// 	totalPages: this.totalPages,
		// 	totalResults: this.totalResults,
		// 	mediaItemPoster: this.mediaItemPoster
		// }
		console.log(this.mediaItemsList);
	}

	ngAfterViewInit() {
		// var that = this;


		// this.mediaItemsList = {
		// 	mediaItems: this.mediaItems,
		// 	dates: this.dates,
		// 	page: this.page,
		// 	totalPages: this.totalPages,
		// 	totalResults: this.totalResults,
		// 	mediaItemPoster: this.mediaItemPoster
		// }

		// mediaItems: this.mediaItems,
		// datesmediaItems: this.datesmediaItems,
		// pagemediaItems: this.pagemediaItems,
		// totalPagesmediaItems: this.totalPagesmediaItems,
		// totalResultsmediaItems: this.totalResultsmediaItems,
		// mediaItemPostermediaItems: this.mediaItemPoster

		// console.log(this.mediaItemsList);
	}

	formatCategory(str) {
		// return str.toUpperCase().split(/[A-Z]/)
	}

	/** Get Media */
	getMedia(url: string) {
		this.mediaService.getMedia(url).subscribe(media => {
			this.mediaItems = media['results'];
			this.dates = media['dates'];
			this.page = media['page'];
			this.totalPages = media['total_pages'];
			this.totalResults = media['total_results'];

			this.mediaItemsList['mediaItems'] = this.mediaItems
			this.mediaItemsList['dates'] = this.dates
			this.mediaItemsList['page'] = this.page
			this.mediaItemsList['totalPages'] = this.totalPages
			this.mediaItemsList['totalResults'] = this.totalResults

			////// WORKING W/O Above ///////
			// this.mediaItemsList['mediaItems'] = media['results'];
			// this.mediaItemsList['dates'] = media['dates'];
			// this.mediaItemsList['page'] = media['page'];
			// this.mediaItemsList['totalPages'] = media['total_pages'];
			// this.mediaItemsList['totalResults'] = media['total_results'];
			////////////////////////////////////////
			////////////////////////////////////////

			console.log(this.mediaCategories);
			console.log(url);
			console.log(media);
			// this.movies.push(movies.results);
			// console.log(this.movies);
			// console.log(movies);
			////////////////////////////////////////

			// this.mediaItemsList = {
			// 	mediaItems: media['results'],
			// 	dates: media['dates'],
			// 	page: media['page'],
			// 	totalPages: media['total_pages'],
			// 	totalResults: media['total_results']
			// };
			////////////////////////////////////////

			// this.mediaItemsList['mediaItemPoster'] = 'https://image.tmdb.org/t/p/w200';
			// mediaItems: MediaList[] = [];
			// dates: Object;
			// page: number = 1;
			// totalPages: number = 0;
			// totalResults: number = 0;
			////////////////////////////////////////

			// this.mediaItemsList.mediaItems = media['results'];
			// this.mediaItemsList.dates = media['dates'];
			// this.mediaItemsList.page = media['page'];
			// this.mediaItemsList.totalPages = media['total_pages'];
			// this.mediaItemsList.totalResults = media['total_results'];
			////////////////////////////////////////
		});

		// this.mediaItemsList = {
		// 	mediaItems: this.mediaItems,
		// 	dates: this.dates,
		// 	page: this.page,
		// 	totalPages: this.totalPages,
		// 	totalResults: this.totalResults,
		// 	mediaItemPoster: this.mediaItemPoster
		// }
		// console.log(this.mediaItemsList);
	}
}
