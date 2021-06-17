import {
  Box,
  Heading,
  VStack,
  Text,
  Flex,
  HStack,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { TTrendingAllData } from 'types';
import { genPosterImage } from 'lib/generateImages';

type ItemCardProps = {
  data: TTrendingAllData;
};

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  return (
    <VStack align="flex-start" spacing={1} minW={40} w="full">
      <Box
        bg="gray.700"
        bgImage={`url('${
          data.poster_path && genPosterImage(data.poster_path, 'sm')
        }')`}
        bgSize="cover"
        bgPosition="center"
        rounded="md"
        h={64}
        w="full"
        mb={4}
      ></Box>
      <Text fontWeight="bold" fontSize="sm">
        {data.title || data.name}
      </Text>
      <Flex justify="space-between" w="full">
        <Text fontSize="xs" color="gray.400">
          {data.release_date || data.first_air_date}
        </Text>
        <HStack>
          <Icon as={BsStarFill} w={3} h={3} color="gray.400" />
          <Text fontSize="xs" color="gray.400">
            {data.vote_average}
          </Text>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default ItemCard;
