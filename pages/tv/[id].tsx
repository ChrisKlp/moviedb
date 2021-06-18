import React from 'react';
import { Container, Spinner } from '@chakra-ui/react';
import { SinglePageHeader, CastCardList } from 'components';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import _ from 'lodash';

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

  if (dataQuery.some(query => query.isLoading))
    return <Spinner colorScheme="teal" />;

  console.log(_.filter(dataQuery[1].data.crew, { job: 'Screenplay' }));
  console.log(dataQuery);

  return (
    <>
      <SinglePageHeader data={dataQuery[0].data} tvHeader />
      <Container>
        <CastCardList
          heading="Cast"
          data={dataQuery[1].data.cast.slice(0, 15)}
        />
      </Container>
    </>
  );
};

export default SingleTvPage;
