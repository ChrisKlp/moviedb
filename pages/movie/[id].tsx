import { Box, Container, Spinner } from '@chakra-ui/react';
import { CastCardList, SinglePageHeader } from 'components';
import Loading from 'components/Loading';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import React from 'react';

type SingleMoviePageProps = {
  query: {
    id: string;
  };
};

const SingleMoviePage = ({ query }: SingleMoviePageProps) => {
  const dataQuery = useQueriesTyped([
    {
      queryKey: `movie${query.id}`,
      queryFn: () => fetcher(`/movie/${query.id}`),
    },
    {
      queryKey: `movieCredits${query.id}`,
      queryFn: () => fetcher(`/movie/${query.id}/credits`),
    },
  ]);

  // console.log(_.filter(dataQuery[1].data.crew, { job: 'Screenplay' }));

  if (dataQuery.some(query => query.isLoading)) return <Loading />;

  return (
    <Box as="main">
      <SinglePageHeader data={dataQuery[0].data} />
      <Container>
        <CastCardList
          heading="Cast"
          data={dataQuery[1].data.cast.slice(0, 15)}
        />
      </Container>
    </Box>
  );
};

export default SingleMoviePage;
