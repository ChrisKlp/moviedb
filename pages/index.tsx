import { Box, Spinner } from '@chakra-ui/react';
import Hero from 'components/Home/Hero';
import React from 'react';
import { useQueries, useQuery } from 'react-query';
import fetcher from 'utils/fetcher';

const Home: React.FC = () => {
  const dataQuery = useQueries([
    { queryKey: 'trendyAll', queryFn: () => fetcher('/trending/all/week') },
    { queryKey: 'genresMovie', queryFn: () => fetcher('/genre/movie/list') },
    { queryKey: 'genresTv', queryFn: () => fetcher('/genre/tv/list') },
  ]);

  return <Box>{/* {isLoading ? <Spinner colorScheme="teal" /> : null} */}</Box>;
};

export default Home;
