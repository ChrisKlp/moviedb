import React from 'react';
import { Container, Skeleton, Spinner } from '@chakra-ui/react';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';
import { SinglePageHeader, CastCardList } from 'components';

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

  return (
    <>
      <Skeleton isLoaded={dataQuery[0].status === 'success'}>
        {dataQuery[0].data && <SinglePageHeader data={dataQuery[0].data} />}
      </Skeleton>
      <Container>
        <Skeleton isLoaded={dataQuery[1].status === 'success'}>
          {dataQuery[1].data && (
            <CastCardList
              heading="Cast"
              data={dataQuery[1].data.cast.slice(0, 15)}
            />
          )}
        </Skeleton>
      </Container>
    </>
  );
};

export default SingleMoviePage;
