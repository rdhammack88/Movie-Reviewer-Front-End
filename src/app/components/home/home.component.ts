import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

import { MediaList } from '../../interfaces/media-list';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	// @Input() searchType: string = 'theater1';
	// mediaUrls: Object = {
	// 	theater: 'nowPlaying',
	// 	popMovies: 'popularMovies',
	// 	popTv: 'popularTv',
	// 	upcoming: 'upcoming'
	// };

	mediaUrls: Array<string> = ['upcoming', 'nowPlaying', 'popularMovies', 'popularTv'];

	constructor() {
		// console.log(this.mediaUrls);
	}

	ngOnInit() {
		// console.log(this.mediaUrls);
	}
	// movies: MovieList[] = [];
	// dates: Object;
	// page: string = '2';
	// // page: string = this.activatedRoute.url.subscribe(url => url[1].path);
	// // page: Object = this.route.params.subscribe(response => console.log(response.page));
	// path; // = this.activatedRoute.url; //.subscribe(url => url[1].path);
	// route = this.path ? this.activatedRoute.url.subscribe(url => url[1].path) : 'home';
	// totalPages: string = '';
	// totalResults: string = '';
	// moviePoster: string = 'https://image.tmdb.org/t/p/w200';
	// constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
	// 	this.getMovies();
	// 	// this.path = this.activatedRoute.url.subscribe(url => url); //[1].path);
	// 	// console.log(this.route);
	// 	// console.log(this.path);
	// 	// console.log(this.activatedRoute.url.subscribe(url => url));
	// 	// console.log(this.searchType);
	// 	console.log('home-component');
	// }
	// ngOnInit() {
	// 	// console.log(this.searchType);
	// }
	// /** Get Movies */
	// getMovies() {
	// 	this.movieService.getMovies('nowPlaying').subscribe(movies => {
	// 		this.movies = movies['results'];
	// 		this.dates = movies['dates'];
	// 		this.totalPages = movies['total_pages'];
	// 		this.totalResults = movies['total_results'];
	// 		// console.log(this.movies);
	// 		// console.log(movies);
	// 	});
	// }
}
