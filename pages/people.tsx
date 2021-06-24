import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { CastCard, Loading } from 'components';
import { paginatedFetcher } from 'lib/fetcher';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useQuery } from 'react-query';
import { TCast } from 'types/castTypes';

type PeoplePageProps = {};

const PeoplePage: React.FC<PeoplePageProps> = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data, isPreviousData } = useQuery(
    ['popularPeople', page],
    () => paginatedFetcher('/person/popular', page),
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

  console.log(data);
  console.log(isPreviousData);

  return (
    <Container py={8}>
      <HStack justify="space-between">
        <Box>
          <Heading mb={2}>Popular People</Heading>
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
      <SimpleGrid minChildWidth={120} spacing={5}>
        {data.results.map((item: TCast) => (
          <Link href={`/person/${item.id}`}>
            <a>
              <CastCard data={item} />
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PeoplePage;
