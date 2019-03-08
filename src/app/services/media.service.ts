import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { MediaList } from '../interfaces/media-list';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MediaService {
	// implements MovieList
	media: Object;
	private mediaItems: MediaList[] = [];
	// page = '1';
	page = this.route.snapshot.url.length ? this.route.snapshot.url[3].path : '1';
	displayTotalResults = [1, 20];




	// page: number = 1;
	// page: any = this.route.params.subscribe(response => console.log(response.page));
	// movie_poster = 'https://image.tmdb.org/t/p/w200';
	private API_KEY = 'ce1ba8ff0b6f40898caf5bd2a5c73e6b';
	private imageBaseUrl: string = '';
	private imageSizes: { backdrop?: string[]; poster?: string[] } = {};
	private mediaUrls = {
		config: 'https://api.themoviedb.org/3/configuration',
		movie: 'https://api.themoviedb.org/3/movie',
		upcoming_movies: 'https://api.themoviedb.org/3/movie/upcoming',
		now_playing: 'https://api.themoviedb.org/3/movie/now_playing',
		popular_movies: 'https://api.themoviedb.org/3/movie/popular',
		popular_tv: 'https://api.themoviedb.org/3/tv/popular',
		search: 'https://api.themoviedb.org/3/search/movie',
		tv: 'https://api.themoviedb.org/3/tv'
	};
	error: string;

	mediaItemsList = {};

	constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

	/** */
	convertToArray(num: number): any[] {
		return Array(num);
	}

	/** Get Media Details */
	getMediaDetails(url: string, mediaId?: string) {
		// console.log('Getting Movie');
		const params = new HttpParams().set('api_key', this.API_KEY);
		return this.http.get(`${this.mediaUrls[url]}/${mediaId}`, { params });
	}

	/** Return Media Array */
	// returnMediaItem(page) {
	// 	// return '123 Test';
	// 	this.page = page;
	// 	this.getMediaDetails('popularMovies');
	// 	console.log(typeof this.media);
	// 	return this.media;
	// }

	/** Get Media */
	getMedia(url: string, page?: string) {
		// if (Number(page) !== 1) {
		// 	this.displayTotalResults = [
		// 		(Number(page) * this.mediaItems.length) - 19,
		// 		Number(page) * this.mediaItems.length
		// 	]
		// }

		console.log('Getting Movies');
		const params = new HttpParams().set('api_key', this.API_KEY).set('page', page ? page : this.page);
		return this.http.get(this.mediaUrls[url], { params });
	}

	/** Return Media Array */
	// returnMediaItems(page) {
	// 	// return '123 Test';
	// 	this.page = page;
	// 	this.getMedia('popularMovies');
	// 	console.log(typeof this.mediaItems);
	// 	return this.mediaItems;
	// }

	/** Change page number */
	changePage(pageChange) {
		if (pageChange === 'next') {
			// this.page++;
		} else if (pageChange === 'prev') {
			// this.page--;
		}
		console.log(this.page);
		// this.getMedia();
		console.log(this.page);
		// this.route.params.subscribe(response => console.log(response.page));
		// this.route.params.page;
	}

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

	createPhotoUrl(path: string, isBackdrop: boolean) {
		if (!path) {
			return '';
		}
		const { backdrop, poster } = this.imageSizes;

		// const imageSize = isBackdrop ? backdrop[0] : poster[-1];
		const imageSize = isBackdrop ? backdrop[0] : poster[this.imageSizes.poster.length - 1];
		// const imageSize = isBackdrop ? this.imageSizes.backdrop[0] : this.imageSizes.poster[-1]
		// const imageSize = isBackdrop ? this.imageSizes.backdrop[0] : this.imageSizes.poster[this.imageSizes.poster.length - 1]
		return `${this.imageBaseUrl}${imageSize}${path}`;
	}
}
