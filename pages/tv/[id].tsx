import { Box, Container, Spinner } from '@chakra-ui/react';
import { CastCardList, SinglePageHeader } from 'components';
import Loading from 'components/Loading';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';
import React from 'react';

type SingleTvPageProps = {
  query: {
    id: string;
  };
};

const SingleTvPage = ({ query }: SingleTvPageProps) => {
  const dataQuery = useQueriesTyped([
    {
      queryKey: `tv${query.id}`,
      queryFn: () => fetcher(`/tv/${query.id}`),
    },
    {
      queryKey: `tvCredits${query.id}`,
      queryFn: () => fetcher(`/tv/${query.id}/credits`),
    },
  ]);

  if (dataQuery.some(query => query.isLoading)) return <Loading />;

  console.log(_.filter(dataQuery[1].data.crew, { job: 'Screenplay' }));

  return (
    <Box as="main">
      <SinglePageHeader data={dataQuery[0].data} tvHeader />
      <Container>
        <CastCardList
          heading="Cast"
          data={dataQuery[1].data.cast.slice(0, 15)}
        />
      </Container>
    </Box>
  );
};

export default SingleTvPage;
