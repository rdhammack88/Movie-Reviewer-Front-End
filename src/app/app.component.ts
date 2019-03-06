import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'materialize-css';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// @Input() searchType: string;
	// searchTypes: Object = {
	// 	theater: 'nowPlaying',
	// 	popMovies: 'popularMovies',
	// 	popTv: 'popularTv',
	// 	upcoming: 'upcoming'
	// };

	constructor() {
		// console.log(this.searchType);
	}
}
