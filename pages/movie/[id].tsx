import { Spinner } from '@chakra-ui/react';
import { ItemHero } from 'components/Item';
import fetcher from 'lib/fetcher';
import React from 'react';
import { useQuery } from 'react-query';
import { TSingleMovie, TSingleTV } from 'types';

type MoviePageProps = {
  query: {
    id: string;
  };
};

const MoviePage = ({ query }: MoviePageProps) => {
  const { data, isLoading, error } = useQuery<TSingleMovie & TSingleTV>(
    'movie',
    () => fetcher(`/movie/${query.id}`)
  );

  if (isLoading) return <Spinner colorScheme="teal" />;

  return <>{data && <ItemHero data={data} />}</>;
};

export default MoviePage;
