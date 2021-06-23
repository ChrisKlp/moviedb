import React from 'react';
import { Box, Container, Spinner, Skeleton } from '@chakra-ui/react';
import Hero from 'components/Hero';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';
import { ItemCardList } from 'components';

const HomePage: React.FC = () => {
  const dataQuery = useQueriesTyped([
    { queryKey: 'trendingAll', queryFn: () => fetcher('/trending/all/day') },
    { queryKey: 'genresMovie', queryFn: () => fetcher('/genre/movie/list') },
    { queryKey: 'genresTv', queryFn: () => fetcher('/genre/tv/list') },
  ]);

  return (
    <Box>
      <Skeleton isLoaded={dataQuery.some(query => query.status === 'success')}>
        {dataQuery[0].data?.results[0] &&
          dataQuery[1].data?.genres &&
          dataQuery[2].data?.genres && (
            <Hero
              data={dataQuery[0].data.results[0]}
              genres={_.uniqBy(
                [...dataQuery[1].data.genres, ...dataQuery[2].data.genres],
                'id'
              )}
            />
          )}
      </Skeleton>
      <Skeleton isLoaded={dataQuery.some(query => query.status === 'success')}>
        <Container>
          {dataQuery[0].data?.results && (
            <ItemCardList
              heading="Trending Today"
              data={dataQuery[0].data.results.slice(1)}
            />
          )}
        </Container>
      </Skeleton>
    </Box>
  );
};

export default HomePage;
