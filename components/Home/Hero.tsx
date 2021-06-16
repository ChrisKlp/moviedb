import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsDot, BsPlay, BsStarFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import fetcher from 'utils/fetcher';

type HeroProps = {
  data: {
    id: number;
    backdrop_path: string;
    title?: string;
    original_name: string;
    overview: string;
    vote_average: number;
    genres: {
      id: number;
      name: string;
    }[];
  };
};

const Hero: React.FC<HeroProps> = ({ data }) => {
  const backdropImage = `https://www.themoviedb.org/t/p/original${data.backdrop_path}`;
  return (
    <Flex
      position="relative"
      p={12}
      h="xl"
      align="center"
      justify="flex-end"
      bgImage={`url('${backdropImage}')`}
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
        bgGradient="linear(to-r, ,rgba(0,0,0,0) , gray.900)"
        zIndex={-1}
      />
      <VStack align="flex-start" spacing={2} maxW={[null, null, '40vw']}>
        <Heading color="white" fontSize={44} lineHeight="none">
          {data.title || data.original_name}
        </Heading>
        <HStack spacing={3}>
          <HStack>
            <Icon as={BsStarFill} color="gray.300" />
            <Text fontSize="sm" color="gray.300">
              {data.vote_average}
            </Text>
          </HStack>
          <Icon as={BsDot} color="gray.300" />
          <Text fontSize="sm" color="gray.300">
            {/* {genreData.map(genre => genre.name).join(', ')} */}
          </Text>
        </HStack>
        <Text fontSize="sm" pb={6}>
          {data.overview.substring(0, Math.min(350, data.overview.length)) +
            (data.overview.length > 350 && '...')}
        </Text>
        <HStack>
          <Button colorScheme="teal" rounded="full">
            View more
          </Button>
          <Button
            colorScheme="teal"
            rounded="full"
            variant="ghost"
            rightIcon={<BsPlay size={20} />}
          >
            Play Trailer
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Hero;
