import {
  TProductionCompanies,
  TProductionCountries,
  TSpokenLanguages,
} from './commonTypes';

export type TMovieItem = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
};

export type TSingleMovie = Omit<TMovieItem, 'media_type' | 'genre_ids'> & {
  belongs_to_collection: boolean;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
  production_companies: TProductionCompanies[];
  production_countries: TProductionCountries[];
  revenue: number;
  runtime: number;
  spoken_languages: TSpokenLanguages[];
  status: string;
  tagline: string;
  video: boolean;
};
