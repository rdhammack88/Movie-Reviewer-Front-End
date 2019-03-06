export interface Media {
	// Movie
	backdrop_path?: string | null;
	backdropUrl?: string;
	genres?: Array<Object>;
	homepage?: string | null;
	id?: number;
	original_language?: string;
	original_title?: string;
	overview?: string | null;
	poster_path?: string | null;
	posterUrl?: string;
	release_date?: Date;
	runtime?: number | null;
	title?: string;

	adult?: boolean;
	genre_ids?: Array<number>;
	popularity?: number;
	vote_count?: number;
	vote_average?: number;
	video?: boolean;

	// TV
	name?: string;
	original_name?: string;
	origin_country?: Array<string>;
	first_air_date?: Date;

}
