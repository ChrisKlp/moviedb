import { Box, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import { TTrendingAllData } from 'types';
import ItemCard from './ItemCard';
import Link from 'next/link';

type TrendingProps = {
  data: TTrendingAllData[];
};

const Trending: React.FC<TrendingProps> = ({ data }) => {
  return (
    <Box p={8}>
      <Heading fontSize="xl" fontWeight="semibold" color="teal.300" mb={6}>
        Trending now
      </Heading>
      <SimpleGrid minChildWidth="150px" spacing="20px">
        {data.map(item => (
          <Link href={`/${item.media_type}/${item.id}`} key={item.id}>
            <a>
              <ItemCard data={item} />
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Trending;
