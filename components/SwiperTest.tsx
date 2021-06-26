import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  IconButton,
} from '@chakra-ui/react';
import useSwiperRef from 'lib/useSwiperRef';
import Link from 'next/link';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import SwiperCore, { Navigation, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Scrollbar]);

type TData = {
  name: string;
  date: string;
  vote: number;
};

const data: TData[] = new Array(15).fill({
  name: 'Movie',
  date: '2021-05-21',
  vote: 8,
});

type TestProps = {
  data: TData;
};

const TestItem: React.FC<TestProps> = ({ data }) => {
  return (
    <Box w="full">
      <AspectRatio ratio={2 / 3} mb={4} maxH="315px">
        <Box
          bg="gray.700"
          bgSize="cover"
          bgPosition="center"
          rounded="md"
          h={64}
          w="full"
        />
      </AspectRatio>
      <Text fontWeight="bold" fontSize="sm" mb={1}>
        {data.name}
      </Text>
      <Flex justify="space-between" w="full">
        <Text fontSize="xs" color="gray.400">
          {data.date}
        </Text>
        <HStack>
          <Icon as={BsStarFill} w={3} h={3} color="gray.400" />
          <Text fontSize="xs" color="gray.400">
            {data.vote}
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

const SwiperTest: React.FC = () => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <Box py={8}>
      <Heading fontSize="xl" fontWeight="semibold" color="teal.300" mb={6}>
        Test
      </Heading>
      <Box position="relative">
        <Swiper
          navigation={{
            prevEl,
            nextEl,
          }}
          onInit={swiper => {
            //@ts-ignore
            swiper.params.navigation.prevEl = prevEl;
            //@ts-ignore
            swiper.params.navigation.nextEl = nextEl;
            swiper.navigation.update();
          }}
          spaceBetween={20}
          slidesPerView={2}
          freeMode={true}
          scrollbar
          breakpoints={{
            '480': {
              slidesPerView: 3,
            },
            '768': {
              slidesPerView: 4,
              slidesPerGroup: 4,
              freeMode: false,
            },
            '1024': {
              slidesPerView: 5,
              slidesPerGroup: 5,
              freeMode: false,
            },
            '1280': {
              slidesPerView: 6,
              slidesPerGroup: 6,
              freeMode: false,
            },
            '1440': {
              slidesPerView: 8,
              slidesPerGroup: 8,
              freeMode: false,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={`${index}_${item.name}`}>
              <Link href={`/movies`}>
                <a>
                  <TestItem data={item} />
                </a>
              </Link>
            </SwiperSlide>
          ))}
          <Box h={8} />
        </Swiper>
        <IconButton
          position="absolute"
          bottom="calc(50% + 20px)"
          left="-20px"
          icon={<MdKeyboardArrowLeft size={20} />}
          ref={prevElRef}
          aria-label="prev button"
          rounded="full"
          colorScheme="teal"
          zIndex="docked"
          display={['none', null, 'inline-flex']}
        >
          left
        </IconButton>
        <IconButton
          position="absolute"
          bottom="calc(50% + 20px)"
          right="-20px"
          icon={<MdKeyboardArrowRight size={20} />}
          ref={nextElRef}
          aria-label="next button"
          rounded="full"
          colorScheme="teal"
          zIndex="docked"
          display={['none', null, 'inline-flex']}
        >
          right
        </IconButton>
      </Box>
    </Box>
  );
};

export default SwiperTest;
