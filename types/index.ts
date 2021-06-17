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

export type TTvItem = {
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
};

export type TProductionCompanies = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type TProductionCountries = {
  iso_3166_1: string;
  name: string;
};

export type TSpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TCreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
};

export type TLastEpisodeToAir = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
};

export type TNetworks = {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
};

export type TSeasons = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
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

export type TSingleTV = Omit<TTvItem, 'media_type' | 'genre_ids'> & {
  created_by: TCreatedBy[];
  episode_run_time: number[];
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_episode_to_air: TLastEpisodeToAir;
  next_episode_to_air: null;
  networks: TNetworks[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: TProductionCompanies[];
  production_countries: TProductionCountries[];
  seasons: TSeasons[];
  spoken_languages: TSpokenLanguages[];
  status: string;
  tagline: string;
  type: string;
};

export type TTrendingAllData = TMovieItem & TTvItem;

export type TTrendingAllQuery = {
  page: number;
  results: TTrendingAllData[];
  total_pages: number;
  total_results: number;
};

export type TCast = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type TCrew = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: number;
  department: string;
  job: string;
};

export type TCredits = {
  id: number;
  cast: TCast[];
  crew: TCrew[];
};
