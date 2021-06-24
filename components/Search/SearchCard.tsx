import { AspectRatio, Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { genPersonImage, genPosterImage } from 'lib/generateImages';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { TMovieItem } from 'types/movieTypes';
import { TSinglePerson } from 'types/personTypes';
import { TTvItem } from 'types/tvTypes';

type SearchCardProps = {
  data: TMovieItem & TTvItem & TSinglePerson;
};

const SearchCard: React.FC<SearchCardProps> = ({ data }) => {
  const bgImage = data.poster_path
    ? genPosterImage(data.poster_path, 'sm')
    : data.profile_path && genPersonImage(data.profile_path, 'sm');

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
    </Box>
  );
};

export default SearchCard;
