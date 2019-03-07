import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

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

	constructor(
		private mediaService: MediaService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		// console.log(this.mediaUrls);
	}
}
