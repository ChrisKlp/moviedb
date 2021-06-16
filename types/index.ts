export type TTrendingMovie = Partial<{
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
}>;

export type TTrendingTV = Partial<{
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}>;

export type TTrendingAllData = TTrendingMovie & TTrendingTV;

export type TTrendingAllQuery = {
  page: number;
  results: TTrendingAllData[];
  total_pages: number;
  total_results: number;
};
