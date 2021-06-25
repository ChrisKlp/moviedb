import { Box, Heading, IconButton } from '@chakra-ui/react';
import useSwiperRef from 'lib/useSwiperRef';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import SwiperCore, { Navigation, Scrollbar } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TCast } from 'types/castTypes';
import CastCard from './CastCard';

SwiperCore.use([Navigation, Scrollbar]);

type SwiperCastListProps = {
  data: TCast[];
  heading: string;
};

const SwiperCastList: React.FC<SwiperCastListProps> = ({ data, heading }) => {
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
          slidesPerView={2}
          freeMode={true}
          scrollbar
          breakpoints={{
            '375': {
              slidesPerView: 3,
            },
            '480': {
              slidesPerView: 4,
            },
            '768': {
              slidesPerView: 5,
              slidesPerGroup: 5,
              freeMode: false,
            },
            '1024': {
              slidesPerView: 7,
              slidesPerGroup: 7,
            },
            '1280': {
              slidesPerView: 8,
              slidesPerGroup: 8,
            },
            '1440': {
              slidesPerView: 10,
              slidesPerGroup: 10,
            },
          }}
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <Link href={`/person/${item.id}`}>
                <a>
                  <CastCard data={item} />
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

export default SwiperCastList;
