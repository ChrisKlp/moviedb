import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import SwiperCore, { Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Scrollbar]);

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

const SkeletonItem: React.FC<TestProps> = ({ data }) => {
  return (
    <Box w="full">
      <AspectRatio ratio={2 / 3} mb={4} maxH="315px">
        <Skeleton rounded="md" h={64} w="full" />
      </AspectRatio>
      <Skeleton h="16px" mt="2px" mb="7px" />
      <Flex justify="space-between" w="full">
        <Skeleton w="65px" h="14px" mt="2px" mb="2px" />
        <Skeleton w="35px" h="14px" mt="2px" mb="2px" />
      </Flex>
    </Box>
  );
};

const SwiperSkeletonList: React.FC = () => {
  return (
    <Box pt={8} pb={14}>
      <Skeleton maxW={60}>
        <Heading fontSize="xl" fontWeight="semibold" color="teal.300" mb={6}>
          Loading
        </Heading>
      </Skeleton>
      <Box position="relative">
        <Grid
          gap={5}
          templateRow={1}
          autoFlow="column"
          autoColumns={[
            'calc(50% - 10px)',
            'calc(33.3% - 13px)',
            'calc(25% - 15px)',
            'calc(20% - 16px)',
            'calc(16.6% - 16px)',
            'calc(12.5% - 17.5px)',
          ]}
          overflow="hidden"
        >
          {data.map((item, index) => (
            <SkeletonItem data={item} key={`${index}_${item.name}`} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SwiperSkeletonList;
