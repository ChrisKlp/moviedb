import { Box, Text, VStack } from '@chakra-ui/react';
import { genPersonImage } from 'lib/generateImages';
import React from 'react';
import { TCast } from 'types/castTypes';

type CastCardProps = {
  data: TCast;
};

const CastCard: React.FC<CastCardProps> = ({ data }) => {
  const bgImage = data.profile_path && genPersonImage(data.profile_path, 'sm');

  return (
    <VStack align="flex-start" spacing={1} w={32}>
      <Box
        bg="gray.700"
        bgImage={`url('${bgImage}')`}
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
