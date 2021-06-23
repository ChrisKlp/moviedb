import React from 'react';
import { Box, Container, Spinner, Skeleton, Center } from '@chakra-ui/react';
import Hero from 'components/Hero';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';
import { ItemCardList } from 'components';
import Loading from 'components/Loading';

const HomePage: React.FC = () => {
  const dataQuery = useQueriesTyped([
    { queryKey: 'trendingAll', queryFn: () => fetcher('/trending/all/day') },
    { queryKey: 'genresMovie', queryFn: () => fetcher('/genre/movie/list') },
    { queryKey: 'genresTv', queryFn: () => fetcher('/genre/tv/list') },
  ]);

  if (dataQuery.some(query => query.isLoading)) return <Loading />;

  return (
    <Box as="main">
      <Hero
        data={dataQuery[0].data.results[0]}
        genres={_.uniqBy(
          [...dataQuery[1].data.genres, ...dataQuery[2].data.genres],
          'id'
        )}
      />
      <Container>
        <ItemCardList
          heading="Trending Today"
          data={dataQuery[0].data.results.slice(1)}
        />
      </Container>
    </Box>
  );
};

export default HomePage;
