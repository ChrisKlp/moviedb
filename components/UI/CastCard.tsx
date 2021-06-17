import {
  Box, Text, VStack
} from '@chakra-ui/react';
import { genProfileImage } from 'lib/generateImages';
import React from 'react';
import { TCast } from 'types';

type CastCardProps = {
  data: TCast;
};

const CastCard: React.FC<CastCardProps> = ({ data }) => {
  return (
    <VStack align="flex-start" spacing={1} minW={32} w="full">
      <Box
        bg="gray.700"
        bgImage={`url('${
          data.profile_path && genProfileImage(data.profile_path, 'sm')
        }')`}
        bgSize="cover"
        bgPosition="center"
        rounded="md"
        h={48}
        w="full"
        mb={4}
      ></Box>
      <Text fontWeight="bold" fontSize="sm">
        {data.name}
      </Text>
      <Text fontSize="xs" color="gray.400">
        {data.character}
      </Text>
    </VStack>
  );
};

export default CastCard;
