import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
  Container,
  IconButton,
  Tooltip,
  Button,
} from '@chakra-ui/react';
import { genBackdropImage, genPosterImage } from 'lib/generateImages';
import React from 'react';
import {
  BsStarFill,
  BsDot,
  BsClockFill,
  BsLink45Deg,
  BsPlay,
} from 'react-icons/bs';
import { TSingleMovie, TSingleTV } from 'types';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

type ItemHeaderProps = {
  data: TSingleMovie & TSingleTV;
};

const ItemHeader: React.FC<ItemHeaderProps> = ({ data }) => {
  return (
    <Flex
      position="relative"
      p={[6, null, 12]}
      minH={['calc(100vh - 8.5rem)', null, 'xl']}
      align="center"
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
      <Container>
        <Flex
          w="full"
          direction={['column', null, 'row']}
          align={['flex-start', null, 'center']}
        >
          <Box
            bg="gray.700"
            bgImage={[
              `url('${
                data.poster_path && genPosterImage(data.poster_path, 'sm')
              }')`,
              null,
              `url('${data.poster_path && genPosterImage(data.poster_path)}')`,
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
            <Heading fontSize={[22, 32, 40]}>
              {data.title || data.name}{' '}
              <Heading
                as="span"
                fontSize={[22, 32, 40]}
                fontWeight="light"
                color="gray.300"
                display="inline-block"
              >
                (
                {data.release_date.substring(0, 4) ||
                  data.first_air_date.substring(0, 4)}
                )
              </Heading>
            </Heading>
            <HStack mt={2}>
              {data.genres.map(genre => (
                <Tag size="sm" key={genre.id} flexShrink={0}>
                  {genre.name}
                </Tag>
              ))}
            </HStack>
            <HStack spacing={1} mt={4} mb={4}>
              <HStack>
                <Icon as={BsStarFill} color="gray.300" />
                <Text fontSize="sm" color="gray.300">
                  {data.vote_average}/10
                </Text>
              </HStack>
              <Icon as={BsDot} color="gray.300" />
              <HStack>
                <Icon as={BsClockFill} w={4} h={4} color="gray.300" />
                <Text fontSize="sm" color="gray.300">
                  {`${Math.floor(data.runtime / 60)}h ${data.runtime % 60}min`}
                </Text>
              </HStack>
            </HStack>
            <Text fontStyle="oblique" color="teal.300" mb={2}>
              {data.tagline}
            </Text>
            <Text>{data.overview}</Text>
            <HStack mt={6} spacing={4}>
              <Tooltip label="Mark as favorite" placement="bottom">
                <IconButton
                  icon={
                    <MdFavoriteBorder size={20} /> || <MdFavorite size={20} />
                  }
                  aria-label="like button"
                  rounded="full"
                  size="lg"
                />
              </Tooltip>
              <Tooltip label="Visit Homepage" placement="bottom">
                <IconButton
                  as="a"
                  href={data.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<BsLink45Deg size={20} />}
                  aria-label="like button"
                  rounded="full"
                  size="lg"
                />
              </Tooltip>
              <Button
                colorScheme="teal"
                rounded="full"
                variant="ghost"
                rightIcon={<BsPlay size={20} />}
              >
                Play Trailer
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ItemHeader;
