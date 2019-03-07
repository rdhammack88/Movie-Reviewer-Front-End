import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { MediaService } from 'src/app/services/media.service';
import { Media } from 'src/app/interfaces/media';

@Component({
	selector: 'media-card',
	templateUrl: './media-card.component.html',
	styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {
	mediaId: string;
	mediaData: Media;
	constructor(
		private mediaService: MediaService,
		private route: ActivatedRoute,
		private location: Location) {
		// console.log(this.route.snapshot.paramMap.get('id'));
		this.mediaId = this.route.snapshot.paramMap.get('id');
		// console.log(this.mediaId);
		// this.getMedia();
	}

	ngOnInit() {
		this.getMedia();
	}

	/** Get Media */
	getMedia() {
		this.mediaService.getMediaDetails('tvShow', this.mediaId).subscribe(media => {
			console.log(media);
			this.mediaData = media;
			console.log(this.mediaData);
		}),
			error => {
				this.mediaService.getMediaDetails('movie', this.mediaId).subscribe(media => {
					console.log(media);
					this.mediaData = media;
					console.log(this.mediaData);
				});
			};
	}
}
