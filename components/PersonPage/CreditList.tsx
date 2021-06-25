import { Divider, HStack, Link, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { TPersonCast } from 'types/castTypes';

type CreditListProps = {
  data: TPersonCast[];
};

const CreditList: React.FC<CreditListProps> = ({ data }) => {
  const generateDate = (item: TPersonCast) => {
    if (item.release_date) {
      return item.release_date.substring(0, 4);
    }

    if (item.first_air_date) {
      return item.first_air_date.substring(0, 4);
    }

    return '-';
  };

  return (
    <VStack spacing={4} align="flex-start">
      {data.map((item, index) => (
        <React.Fragment key={`${index}-${item.id}`}>
          <HStack spacing={4}>
            <Text w={10} textAlign="center">
              {generateDate(item)}
            </Text>
            <NextLink href={`/movie/${item.id}`} passHref>
              <Link _hover={{ color: 'teal.400' }}>
                {item.title || item.name}
              </Link>
            </NextLink>
            <Text fontSize="sm" color="gray.500">
              as {item.character}
            </Text>
          </HStack>
          <Divider />
        </React.Fragment>
      ))}
    </VStack>
  );
};

export default CreditList;
