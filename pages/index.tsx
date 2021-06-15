import { Box, Container } from '@chakra-ui/react';
import Hero from 'components/Home/Hero';
import React from 'react';
import { useQuery } from 'react-query';
import fetcher from 'utils/fetcher';

const Home: React.FC = () => {
  // const { isLoading, error, data } = useQuery('movie', () =>
  //   fetcher('/movie/76341')
  // );

  // console.log(data);
  return (
    <Box>
      <Hero />
    </Box>
  );
};

export default Home;
