import { Container, Skeleton, Spinner } from '@chakra-ui/react';
import { ItemCardList } from 'components';
import PersonCredits from 'components/PersonPage/PersonCredits';
import PersonHeader from 'components/PersonPage/PersonHeader';
import fetcher from 'lib/fetcher';
import {
  personMovieList,
  personTopCredits,
  personTvList,
} from 'lib/generatePersonCredits';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import React from 'react';

type SinglePersonPageProps = {
  query: {
    id: string;
  };
};

const SinglePersonPage: React.FC<SinglePersonPageProps> = ({ query }) => {
  const dataQuery = useQueriesTyped([
    {
      queryKey: `person${query.id}`,
      queryFn: () => fetcher(`/person/${query.id}`),
    },
    {
      queryKey: `personCombinedCredits${query.id}`,
      queryFn: () => fetcher(`/person/${query.id}/combined_credits`),
    },
  ]);

  return (
    <Container py={[8, null, 20]}>
      <Skeleton isLoaded={dataQuery[0].status === 'success'}>
        {dataQuery[0].data && <PersonHeader data={dataQuery[0].data} />}
      </Skeleton>
      <Skeleton isLoaded={dataQuery[1].status === 'success'}>
        {dataQuery[1].data?.cast && (
          <ItemCardList
            heading="Known For"
            data={personTopCredits(dataQuery[1].data.cast)}
          />
        )}
      </Skeleton>
      <Skeleton isLoaded={dataQuery[1].status === 'success'}>
        {dataQuery[1].data?.cast && (
          <PersonCredits
            movies={personMovieList(dataQuery[1].data.cast)}
            tvShows={personTvList(dataQuery[1].data.cast)}
          />
        )}
      </Skeleton>
    </Container>
  );
};

export default SinglePersonPage;
