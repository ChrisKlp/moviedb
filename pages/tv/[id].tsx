import { Box, Container } from '@chakra-ui/react';
import { SwiperCastList, Loading, SinglePageHeader } from 'components';
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

  return (
    <>
      <SinglePageHeader data={dataQuery[0].data} tvHeader />
      <Container>
        <SwiperCastList
          heading="Cast"
          data={dataQuery[1].data.cast.slice(0, 15)}
        />
      </Container>
    </>
  );
};

export default SingleTvPage;
