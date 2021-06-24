import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Loading } from 'components';
import SearchCard from 'components/Search/SearchCard';
import { searchFetcher } from 'lib/fetcher';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useQuery } from 'react-query';
import { TMovieItem } from 'types/movieTypes';
import { TSinglePerson } from 'types/personTypes';
import { TTvItem } from 'types/tvTypes';

type SearchPageProps = {
  query: {
    query: string;
  };
};

const SearchPage: React.FC<SearchPageProps> = ({ query }) => {
  const [page, setPage] = useState(1);

  const { isLoading, data, isPreviousData } = useQuery(
    ['searchQuery', page, query.query],
    () => searchFetcher(`/search/multi?query=${query.query}`, page),
    {
      keepPreviousData: true,
    }
  );
  const hasMore = data?.page < data?.total_pages;

  const handleNext = () => {
    if (!isPreviousData && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));

  if (isLoading) return <Loading />;

  return (
    <Container py={8}>
      <HStack justify="space-between">
        <Box>
          <Heading mb={2}>Results for: "{query.query}"</Heading>
          <Text fontSize="xs">
            Page: {page} / {data?.total_pages}
          </Text>
        </Box>
      </HStack>
      <HStack justify="space-between" my={6}>
        <Button
          onClick={handlePrev}
          colorScheme="teal"
          rounded="full"
          variant="outline"
          leftIcon={<MdKeyboardArrowLeft size={20} />}
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          colorScheme="teal"
          rounded="full"
          variant="outline"
          rightIcon={<MdKeyboardArrowRight size={20} />}
          disabled={isPreviousData || !hasMore}
        >
          Next
        </Button>
      </HStack>
      <SimpleGrid minChildWidth={160} spacing={5}>
        {data.results.map((item: TMovieItem & TTvItem & TSinglePerson) => (
          <Link href={`/${item.media_type}/${item.id}`} key={item.id}>
            <a>
              <SearchCard data={item} />
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default SearchPage;
