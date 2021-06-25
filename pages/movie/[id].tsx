import { Box, Container } from '@chakra-ui/react';
import { SwiperCastList, Loading, SinglePageHeader } from 'components';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';
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
    {
      queryKey: `movieVideos${query.id}`,
      queryFn: () => fetcher(`/movie/${query.id}/videos`),
    },
  ]);

  if (dataQuery.some(query => query.isLoading)) return <Loading />;

  return (
    <>
      <SinglePageHeader
        data={dataQuery[0].data}
        trailer={dataQuery[2].data.results[0]}
      />
      <Container>
        <SwiperCastList
          heading="Cast"
          data={dataQuery[1].data.cast.slice(0, 15)}
        />
      </Container>
    </>
  );
};

export default SingleMoviePage;
