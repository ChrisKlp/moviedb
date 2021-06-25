import { Container } from '@chakra-ui/react';
import { Loading, Hero, SwiperItemList } from 'components';
import fetcher from 'lib/fetcher';
import { useQueriesTyped } from 'lib/useQueriesTyped';
import { uniqBy } from 'lodash';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const HomePage: React.FC = props => {
  console.log(props);
  const dataQuery = useQueriesTyped([
    { queryKey: 'trendingAll', queryFn: () => fetcher('/trending/all/day') },
    { queryKey: 'genresMovie', queryFn: () => fetcher('/genre/movie/list') },
    { queryKey: 'genresTv', queryFn: () => fetcher('/genre/tv/list') },
    { queryKey: 'upcoming', queryFn: () => fetcher('/movie/upcoming') },
    { queryKey: 'tvPopular', queryFn: () => fetcher('/tv/popular') },
  ]);

  if (dataQuery.some(query => query.isLoading)) return <Loading />;

  return (
    <>
      <Hero
        data={dataQuery[0].data.results[0]}
        genres={uniqBy(
          [...dataQuery[1].data.genres, ...dataQuery[2].data.genres],
          'id'
        )}
      />
      <Container>
        <SwiperItemList
          heading="Trending Today"
          data={dataQuery[0].data.results.slice(1)}
        />
        <SwiperItemList
          heading="Upcoming Movies"
          category="movie"
          data={dataQuery[3].data.results}
        />
        <SwiperItemList
          heading="Popular on TV"
          category="tv"
          data={dataQuery[4].data.results}
        />
      </Container>
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('trendingAll', () =>
    fetcher('/trending/all/day')
  );
  await queryClient.prefetchQuery('genresMovie', () =>
    fetcher('/genre/movie/list')
  );
  await queryClient.prefetchQuery('genresTv', () => fetcher('/genre/tv/list'));
  await queryClient.prefetchQuery('upcoming', () => fetcher('/movie/upcoming'));
  await queryClient.prefetchQuery('tvPopular', () => fetcher('/tv/popular'));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
