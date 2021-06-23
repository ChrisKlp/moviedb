import {
  Heading,
  Box,
  HStack,
  Text,
  VStack,
  Link,
  Divider,
} from '@chakra-ui/react';
import { TPersonCast } from 'types/castTypes';
import NextLink from 'next/link';

type CreditListProps = {
  data: TPersonCast[];
};

const CreditList: React.FC<CreditListProps> = ({ data }) => {
  console.log(data);

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
      {data.map(item => (
        <>
          <HStack key={item.id} spacing={4}>
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
        </>
      ))}
    </VStack>
  );
};

export default CreditList;
