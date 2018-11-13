import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
	dates: Object;
	// page: number = 1;
	page: Object = this.route.params.subscribe(response => console.log(response.page));

	movies: Object;
	totalPages: string = '';
	totalResults: string = '';
	moviePoster: string = 'https://image.tmdb.org/t/p/w200';
	APP_MOVIEDB_API_KEY = 'ce1ba8ff0b6f40898caf5bd2a5c73e6b';
	movieUrls = {
		theater: `https://api.themoviedb.org/3/movie/now_playing?api_key=${
			this.APP_MOVIEDB_API_KEY
		}&language=en-US`
	};

	constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.getMovies();
	}

	/** Get Movies */
	getMovies() {
		this.http.get(this.movieUrls.theater + '&page=${this.page}').subscribe(movies => {
			this.movies = movies['results'];
			this.dates = movies['dates'];
			this.totalPages = movies['total_pages'];
			this.totalResults = movies['total_results'];
			console.log(this.movies);
		});
	}

	/** Change page number */
	changePage(pageChange) {
		if (pageChange === 'next') {
			this.page++;
		} else if (pageChange === 'prev') {
			this.page--;
		}
		console.log(this.page);
		this.getMovies();
		console.log(this.page);
		// this.route.params.subscribe(response => console.log(response.page));
		// this.route.params.page;
	}
}
