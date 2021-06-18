import {
  TCreatedBy,
  TLastEpisodeToAir,
  TNetworks,
  TProductionCompanies,
  TProductionCountries,
  TSeasons,
  TSpokenLanguages,
} from './commonTypes';

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
