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

export type TTrailer = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};
