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

	@Input() mediaPathUrl: string;

	mediaItemsList = {};
	mediaTopicUrl: string = '';

	mediaCategories = {
		'upcoming_movies': 'Upcoming Movies',
		'now_playing': 'Now Playing',
		'popular_movies': 'Popular Movies',
		'popular_tv': 'Popular Tv'
	}


	routePath = this.route.snapshot.url.length ? this.route.snapshot.url[1].path : 'home';

	currentPage: number = this.route.snapshot.url.length ? Number(this.route.snapshot.url[3].path) : 1;
	pageCounter: number = this.currentPage;

	mediaItems: MediaList[] = [];
	mediaType: string;
	dates: Object;
	totalPages: number = 0;
	totalPagesArr: Array<any>;
	totalResults: number = 0;
	displayTotalResults: Array<number>;
	mediaItemPosterUrl: string = 'https://image.tmdb.org/t/p/w200';


	constructor(
		private mediaService: MediaService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		/**
		 * If routePath is not the homepage, reset mediaPathUrl to the routePath path
		 */
		this.mediaPathUrl = this.routePath === 'home' ? this.mediaPathUrl : this.routePath;

		// this.mediaTopicUrl = this.mediaCategories[this.mediaPathUrl].toLowerCase().replace(' ', '_');

		/**
		 * Request data from the api server to return
		 * the requested data based on the url input
		 */
		this.getMedia(this.mediaPathUrl, String(this.currentPage));

		// this.displayTotalResults = [
		// 	(this.currentPage * this.mediaItems.length) - 19,
		// 	this.currentPage * this.mediaItems.length
		// ]

		// this.displayTotalResults = [...this.mediaService.displayTotalResults];

		// this.displayTotalResults = [
		// 	this.currentPage * (this.mediaItems.length - 19),
		// 	this.currentPage * this.mediaItems.length
		// ]



		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////

		/** DEBUGGING */
		console.log(`Media Categories:\n\t\t ${Object.keys(this.mediaCategories)}\n\t\t ${Object.values(this.mediaCategories)}`);
		console.log(`Snapshot of Route Params:\t\t ${this.route.snapshot}`);
		console.log(`Page Number:\t\t\t\t ${this.currentPage}`);

		/**
		 * Should return the same and should match the
		 * following console.log of the url argument
		 * for getMedia method
		 */
		console.log(`Route:\t\t\t\t\t\t ${this.routePath} \nInput Media Path Url:\t\t ${this.mediaPathUrl}`);
		console.log(`Media Topic Url:\t\t\t ${this.mediaTopicUrl}`);

		////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////
	}


	// convertToArray(num: number) {
	// 	this.totalPagesArr = this.mediaService.convertToArray(num);
	// 	// return this.mediaService.convertToArray(num);
	// }

	/** Dynamically Generate Page Numbers for Pagination Links */
	generatePageLinks(num: number, divisor?: number) {
		// // if(divisor) {
		// // 	if(num % divisor === 0) return this.currentPage;
		// // }
		// // console.log(((this.totalPagesArr.length / 2) - 1));

		if(this.currentPage > 5) {
			if (num === 4) {
				return this.currentPage;
			} else if (num < 4) {
				return this.currentPage - (4 - num);
			}

			// if((this.currentPage + 3) == this.totalPages) {
			// 	return this.currentPage + (num - 3);
			// }
			return this.currentPage + (num - 4);

			// return this.pageCounter + num;
			// // return ((this.totalPagesArr.length / 2) - 1);
			// // return num + 1;
		}

		if (this.currentPage <= 5) {
			return num + 1;
		}
		// // return num + 1;
		// return this.pageCounter + num;
	}

	/** Get Media */
	getMedia(url: string, page = String(this.currentPage)) {
		this.mediaService.getMedia(url, page).subscribe(media => {
			this.mediaItems = media['results'];
			this.dates = media['dates'];
			this.currentPage = this.currentPage ? this.currentPage : media['page'];
			this.totalPages = media['total_pages'];
			// this.totalPagesArr = this.totalPages > 10 ? Array(9) : Array(this.totalPages);
			// this.totalPagesArr = (this.totalPages - this.currentPage) <= 3 ?  Array((this.totalPagesArr.length - 1)) : this.totalPagesArr;
			this.totalResults = media['total_results'];

			switch(this.totalPages - this.currentPage) {
				case 0:
					this.totalPagesArr = Array(5);
					break;
				case 1:
					this.totalPagesArr = Array(6)
					break;
				case 2:
					this.totalPagesArr = Array(7);
					break;
				case 3:
					this.totalPagesArr = Array(8)
					break;
				case 5:
					this.totalPagesArr = Array(10);
					break;
				default:
					this.totalPagesArr = this.totalPages > 10 ? Array(9) : Array(this.totalPages);
					break;
			}


			this.mediaItemsList['mediaPathUrl'] = this.mediaPathUrl;
			this.mediaItemsList['mediaItems'] = this.mediaItems;
			this.mediaItemsList['dates'] = this.dates;
			this.mediaItemsList['currentPage'] = this.currentPage;
			this.mediaItemsList['totalPages'] = this.totalPages;
			this.mediaItemsList['totalResults'] = this.totalResults;

			// this.convertToArray(media['total_pages']);
			// this.totalPagesArr = this.mediaService.convertToArray(this.totalPages);


			this.displayTotalResults = [
				(this.currentPage * this.mediaItems.length) - 19,
				this.currentPage * this.mediaItems.length
			]


			// this.displayTotalResults = this.currentPage === 1 ? [1, 20] : [
			// 	(this.currentPage * this.mediaItems.length) + 1,
			// 	(this.currentPage * this.mediaItems.length) + 19,
			// ];

			// if (this.currentPage === 1) {
			// 	this.displayTotalResults = [...this.mediaService.displayTotalResults];
			// } else {
			// 	this.displayTotalResults = [
			// 		this.displayTotalResults[0] + 20,
			// 		this.displayTotalResults[1] + 20
			// 	]
			// }

			// if(this.currentPage === 1) {
			// 	this.displayTotalResults = [
			// 		1,
			// 		20
			// 	]
			// } else if (this.currentPage === 2) {
			// 	this.displayTotalResults = [
			// 		21,
			// 		40
			// 	]
			// } else {
			// 	this.displayTotalResults = [
			// 		((this.currentPage * this.mediaItems.length) + 1) - 20,
			// 		((this.currentPage * this.mediaItems.length) + 20) - 20,
			// 	]
			// }

			// this.displayTotalResults =[...this.mediaService.displayTotalResults];


			if (this.mediaItems[0]['title'] !== undefined) {
				this.mediaType = 'movie';
			} else if (this.mediaItems[0]['name'] !== undefined) {
				this.mediaType = 'tv';
			}

			////// WORKING W/O Above ///////
			// this.mediaItemsList['mediaItems'] = media['results'];
			// this.mediaItemsList['dates'] = media['dates'];
			// this.mediaItemsList['currentPage'] = media['page'];
			// this.mediaItemsList['totalPages'] = media['total_pages'];
			// this.mediaItemsList['totalResults'] = media['total_results'];
			////////////////////////////////////////


			////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////

			/** DEBUGGING */
			console.log(`Input Url String:\t\t\t ${url}`);
			console.log(`Return Observable Object:\n\t\t ${Object.keys(media)}`);
			console.log(`Media Items List Object:\n\t\t ${Object.keys(this.mediaItemsList)}`);
			console.log(`Total Pages Array:\t\t ${this.totalPagesArr}`);
			console.log(`Total Pages Array Length:\t\t ${this.totalPagesArr.length}`);
			console.log(`Total Pages Length:\t\t ${this.totalPages}`);
			console.log(`Media Type:\t\t\t\t ${this.mediaType}`);
			console.log(`Page Number:\t\t\t\t ${this.currentPage}`);

			console.log(`Media:\n\t\t ${media}`, media);
			console.log(`Media Items Length:\n\t\t ${this.mediaItems.length}`);
			console.log(`Media Items[0] Title:\n\t\t ${this.mediaItems[0]['title'] || this.mediaItems[0]['name']}`);
			// ${Object.keys(this.mediaItems)}
			// ${Object.keys(this.mediaItems[0])}
			// ${this.mediaItems}

			////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////
		});
	}
}
