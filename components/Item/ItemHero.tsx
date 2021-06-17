import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { genBackdropImage, genPosterImage } from 'lib/generateImages';
import React from 'react';
import { BsStarFill, BsDot } from 'react-icons/bs';
import { TSingleMovie, TSingleTV } from 'types';

type ItemHeroProps = {
  data: TSingleMovie & TSingleTV;
};

const ItemHero: React.FC<ItemHeroProps> = ({ data }) => {
  console.log(data);
  return (
    <Flex
      position="relative"
      p={12}
      minH={['calc(100vh - 8.5rem)', null, 'xl']}
      bgImage={`url('${
        data.backdrop_path && genBackdropImage(data.backdrop_path)
      }')`}
      bgSize="cover"
      bgPosition="center"
      zIndex={0}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="gray.900"
        opacity={0.8}
        zIndex={-1}
      />
      <Flex w="full" direction="column">
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
          maxW={44}
          mb={4}
          flexShrink={0}
        />
        <Heading size="2xl">{data.title || data.name}</Heading>
        <Text fontSize="lg">
          {data.release_date.substring(0, 4) ||
            data.first_air_date.substring(0, 4)}
        </Text>
        <HStack spacing={3} mt={4} mb={4}>
          <HStack>
            <Icon as={BsStarFill} color="gray.300" />
            <Text fontSize="sm" color="gray.300">
              {data.vote_average}
            </Text>
          </HStack>
          <Icon as={BsDot} color="gray.300" />
          <Text fontSize="sm" color="gray.300">
            {data.genres.map(genre => genre.name).join(', ')}
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.300">
          {data.overview}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ItemHero;
