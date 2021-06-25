import { Box, Heading, IconButton } from '@chakra-ui/react';
import useSwiperRef from 'lib/useSwiperRef';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import SwiperCore, { Navigation, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TMovieItem } from 'types/movieTypes';
import { TTvItem } from 'types/tvTypes';
import ItemCard from './ItemCard';

SwiperCore.use([Navigation, Scrollbar]);

type TTrendingAll = TMovieItem & TTvItem;

type SwiperItemListProps = {
  data: TTrendingAll[];
  heading: string;
  category?: 'movie' | 'tv';
};

const SwiperItemList: React.FC<SwiperItemListProps> = ({
  data,
  heading,
  category,
}) => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();

  return (
    <Box py={8}>
      <Heading fontSize="xl" fontWeight="semibold" color="teal.300" mb={6}>
        {heading}
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
          freeMode={true}
          scrollbar
          breakpoints={{
            '0': {
              slidesPerView: 2,
            },
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
            <SwiperSlide key={`${index}_${item.id}`}>
              <Link href={`/${item.media_type || category}/${item.id}`}>
                <a>
                  <ItemCard data={item} />
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

export default SwiperItemList;
