import { Container, Spinner } from '@chakra-ui/react';
import { ItemHeader } from 'components/Item';
import CastCardList from 'components/UI/CastCardList';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';
import React from 'react';

type MoviePageProps = {
  query: {
    id: string;
  };
};

const MoviePage = ({ query }: MoviePageProps) => {
  const dataQuery = useQueriesTyped([
    {
      queryKey: `movie${query.id}`,
      queryFn: () => fetcher(`/movie/${query.id}`),
    },
    {
      queryKey: `credits${query.id}`,
      queryFn: () => fetcher(`/movie/${query.id}/credits`),
    },
  ]);

  if (dataQuery.some(query => query.isLoading))
    return <Spinner colorScheme="teal" />;

  console.log(_.filter(dataQuery[1].data.crew, { job: 'Screenplay' }));

  return (
    <>
      <ItemHeader data={dataQuery[0].data} />
      <Container>
        <CastCardList
          heading="Cast"
          data={dataQuery[1].data.cast.slice(0, 15)}
        />
      </Container>
    </>
  );
};

export default MoviePage;
