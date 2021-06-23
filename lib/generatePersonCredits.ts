import _ from 'lodash';
import { TPersonCast } from 'types/castTypes';

export const personTopMovies = (data: TPersonCast[], length = 10) => {
  return _.chain(data)
    .filter({ media_type: 'movie' })
    .sortBy(['popularity'])
    .reverse()
    .slice(0, length)
    .value();
};

export const personTopTvShows = (data: TPersonCast[], length = 10) => {
  return _.chain(data)
    .filter({ media_type: 'tv' })
    .sortBy(['popularity'])
    .reverse()
    .slice(0, length)
    .value();
};

export const personTopCredits = (data: TPersonCast[]) => {
  const topMovies = personTopMovies(data);
  const topTvShows = personTopTvShows(data);

  if (topMovies.length < 10) {
    return [...topMovies, ...topTvShows.slice(0, 10 - topMovies.length)];
  }

  return topMovies;
};

export const personMovieList = (data: TPersonCast[]) => {
  return _.chain(data)
    .filter({ media_type: 'movie' })
    .sortBy(['release_date'])
    .reverse()
    .value();
};

export const personTvList = (data: TPersonCast[]) => {
  return _.chain(data)
    .filter({ media_type: 'tv' })
    .sortBy(['first_air_date'])
    .reverse()
    .value();
};
