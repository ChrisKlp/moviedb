import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { genPersonImage } from 'lib/generateImages';
import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { TSinglePerson } from 'types/personTypes';

type LeftSidebarProps = FlexProps & {
  data: TSinglePerson;
};

const LeftSidebar: React.FC<LeftSidebarProps> = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Flex w="full" direction={['column', null, 'row']} align="flex-start">
      <Box
        bg="gray.700"
        bgImage={[
          `url('${
            data.profile_path && genPersonImage(data.profile_path, 'sm')
          }')`,
          null,
          `url('${data.profile_path && genPersonImage(data.profile_path)}')`,
        ]}
        bgSize="cover"
        bgPosition="center"
        rounded="md"
        h={[64, 80, 96]}
        w="full"
        maxW={[44, 56, 64]}
        mb={4}
        flexShrink={0}
      />
      <Box ml={[0, null, 12]}>
        <Heading fontSize={[22, 32, 40]}>{data.name}</Heading>
        <HStack my={4}>
          <Text fontSize="sm" color="gray.300">
            {data.known_for_department}
          </Text>
          <Icon as={BsDot} color="gray.300" />
          <Text fontSize="sm" color="gray.300">
            {data.birthday}
          </Text>
        </HStack>
        {data.biography && (
          <VStack align="flex-start">
            <Text fontSize="sm" lineHeight="tall">
              {data.biography.substring(
                0,
                showMore ? data.biography.length : 400
              )}
              {!showMore ? '...' : ''}
            </Text>
            {data.biography.length >= 400 && (
              <Button
                alignSelf="flex-end"
                mt={2}
                variant="link"
                size="sm"
                onClick={() => setShowMore(prev => !prev)}
              >
                {showMore ? 'Show less' : 'Show more'}
              </Button>
            )}
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default LeftSidebar;
