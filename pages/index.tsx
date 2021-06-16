import { Box, Spinner } from '@chakra-ui/react';
import Hero from 'components/Home/Hero';
import Trending from 'components/Home/Trending';
import { useQueriesTyped } from 'hooks/useQueriesTyped';
import _ from 'lodash';
import React from 'react';
import { useQueries } from 'react-query';
import { TTrendingAllQuery } from 'types';
import fetcher from 'utils/fetcher';

const Home: React.FC = () => {
  const dataQuery = useQueriesTyped([
    { queryKey: 'trendingAll', queryFn: () => fetcher('/trending/all/week') },
    { queryKey: 'genresMovie', queryFn: () => fetcher('/genre/movie/list') },
    { queryKey: 'genresTv', queryFn: () => fetcher('/genre/tv/list') },
  ]);

  return (
    <Box>
      {dataQuery.some(query => query.isLoading) ? (
        <Spinner colorScheme="teal" />
      ) : (
        <>
          <Hero
            data={dataQuery[0].data.results[0]}
            genres={_.uniqBy(
              [...dataQuery[1].data.genres, ...dataQuery[2].data.genres],
              'id'
            )}
          />
          <Trending data={dataQuery[0].data.results.slice(1)} />
        </>
      )}
    </Box>
  );
};

export default Home;
