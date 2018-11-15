import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieList } from '../interfaces/movie-list';

@Injectable({
	providedIn: 'root'
})
export class MovieService implements MovieList {
	movies: MovieList;
	page = '3';

	// page: number = 1;
	// page: any = this.route.params.subscribe(response => console.log(response.page));
	// movie_poster = 'https://image.tmdb.org/t/p/w200';
	private API_KEY = 'ce1ba8ff0b6f40898caf5bd2a5c73e6b';
	private imageBaseUrl: string = '';
	private imageSizes: { backdrop?: string[]; poster?: string[] } = {};
	private movieUrls = {
		config: 'https://api.themoviedb.org/3/configuration',
		nowPlaying: 'https://api.themoviedb.org/3/movie/now_playing',
		popularMovies: 'https://api.themoviedb.org/3/movie/popular',
		popularTv: 'https://api.themoviedb.org/3/tv/popular',
		search: 'https://api.themoviedb.org/3/search/movie',
		upcoming: 'https://api.themoviedb.org/3/movie/upcoming'
	};

	constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
		// this.setImageConfiguration();
	}

	/** Get Movies */
	getMovies() {
		const params = new HttpParams().set('api_key', this.API_KEY).set('page', this.page);
		return this.http.get(this.movieUrls.nowPlaying, { params }).subscribe(movies => {
			this.movies = movies['results'];
			// this.movieList.dates = movies['dates'];
			// this.movieList.totalPages = movies['total_pages'];
			// this.movieList.totalResults = movies['total_results'];
			console.log(this.movies);
			// console.log(this.movieList.movies);
			// console.log(this.movieList);
			console.log('Get Movies Method called from service file');
		});
	}

	/** Change page number */
	// changePage(pageChange) {
	// 	if (pageChange === 'next') {
	// 		this.page++;
	// 	} else if (pageChange === 'prev') {
	// 		this.page--;
	// 	}
	// 	console.log(this.page);
	// 	this.getMovies();
	// 	console.log(this.page);
	// 	// this.route.params.subscribe(response => console.log(response.page));
	// 	// this.route.params.page;
	// }

	// get currentMovie() {
	// 	return this.selectedMovie$;
	// }

	// changeSelectedMovie(movie: Movie) {
	// 	this.selectedMovie$.next(movie);
	// }

	// searchMovie(query: string) {
	// 	const params = new HttpParams().set('api_key', this.apiKey).set('query', query);
	// 	// return this.http.get<any>(this.baseApiUrl, { params }).pipe(map(response => response.results));
	// 	return this.http.get<any>(this.baseApiUrl, { params }).pipe(
	// 		map(response =>
	// 			response.results.map((result: Movie) => {
	// 				return {
	// 					...result,
	// 					backdropUrl: this.createPhotoUrl(result.backdrop_path, true),
	// 					posterUrl: this.createPhotoUrl(result.poster_path, false)
	// 				};
	// 			})
	// 		)
	// 	);
	// }
	// setImageConfiguration() {
	// 	const params = new HttpParams().set('api_key', this.apiKey);
	// 	this.http
	// 		.get<any>(this.baseConfigurationUrl, { params })
	// 		.pipe(map(results => results))
	// 		.subscribe(config => {
	// 			(this.imageBaseUrl = config.images.base_url),
	// 				(this.imageSizes = {
	// 					backdrop: config.images.backdrop_sizes,
	// 					poster: config.images.poster_sizes
	// 				});
	// 			console.log(this.imageBaseUrl);
	// 			console.log(this.imageSizes);
	// 		});
	// }

	// createPhotoUrl(path: string, isBackdrop: boolean) {
	// 	if (!path) {
	// 		return '';
	// 	}
	// 	const { backdrop, poster } = this.imageSizes;

	// 	// const imageSize = isBackdrop ? backdrop[0] : poster[-1];
	// 	const imageSize = isBackdrop ? backdrop[0] : poster[this.imageSizes.poster.length - 1];
	// 	// const imageSize = isBackdrop ? this.imageSizes.backdrop[0] : this.imageSizes.poster[-1]
	// 	// const imageSize = isBackdrop ? this.imageSizes.backdrop[0] : this.imageSizes.poster[this.imageSizes.poster.length - 1]
	// 	return `${this.imageBaseUrl}${imageSize}${path}`;
	// }
}
