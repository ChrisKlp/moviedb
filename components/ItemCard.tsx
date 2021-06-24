import { AspectRatio, Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { genPosterImage } from 'lib/generateImages';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { TMovieItem } from 'types/movieTypes';
import { TTvItem } from 'types/tvTypes';

type ItemCardProps = {
  data: TMovieItem & TTvItem;
};

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  const bgImage = data.poster_path && genPosterImage(data.poster_path, 'sm');

  return (
    <Box w="full">
      <AspectRatio ratio={2 / 3} mb={4}>
        <Box
          bg="gray.700"
          bgImage={`url('${bgImage}')`}
          bgSize="cover"
          bgPosition="center"
          rounded="md"
          h={64}
          w="full"
        />
      </AspectRatio>
      <Text fontWeight="bold" fontSize="sm" mb={1}>
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
    </Box>
  );
};

export default ItemCard;
