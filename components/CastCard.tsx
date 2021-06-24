import { AspectRatio, Box, Text, VStack } from '@chakra-ui/react';
import { genPersonImage } from 'lib/generateImages';
import React from 'react';
import { TCast } from 'types/castTypes';

type CastCardProps = {
  data: TCast;
};

const CastCard: React.FC<CastCardProps> = ({ data }) => {
  const bgImage = data.profile_path && genPersonImage(data.profile_path, 'sm');

  return (
    <Box w="full">
      <AspectRatio ratio={2 / 3} mb={4}>
        <Box
          bg="gray.700"
          bgImage={`url('${bgImage}')`}
          bgSize="cover"
          bgPosition="center"
          rounded="md"
          h={48}
          w="full"
        />
      </AspectRatio>
      <Text fontWeight="bold" fontSize="sm" mb={1}>
        {data.name}
      </Text>
      <Text fontSize="xs" color="gray.400">
        {data.character}
      </Text>
    </Box>
  );
};

export default CastCard;
