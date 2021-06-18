import { Box, Heading, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { TCast } from 'types/castTypes';
import CastCard from './CastCard';

type CastCardListProps = {
  data: TCast[];
  heading: string;
};

const CastCardList: React.FC<CastCardListProps> = ({ data, heading }) => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = listRef.current;
    const handler = () => {
      const endOfScroll =
        current &&
        current?.scrollWidth - current?.scrollLeft === current?.offsetWidth;

      setIsScrollEnd(endOfScroll || false);
    };

    current && current.addEventListener('scroll', handler);
  }, []);

  return (
    <Box py={8}>
      <Heading fontSize="xl" fontWeight="semibold" color="teal.300" mb={6}>
        {heading}
      </Heading>
      <Box position="relative">
        <HStack
          ref={listRef}
          spacing="20px"
          align="flex-start"
          overflowX="auto"
          pb={8}
        >
          {data.map(item => (
            <Link href={`/person/${item.id}`} key={item.id}>
              <a>
                <CastCard data={item} />
              </a>
            </Link>
          ))}
        </HStack>
        <Box
          sx={{
            visibility: isScrollEnd ? 'hidden' : 'visible',
            opacity: isScrollEnd ? '0' : '1',
            transition: 'opacity 0.3s, visibility 0.3s',
          }}
          position="absolute"
          top={0}
          right={0}
          w={28}
          h="full"
          bgGradient="linear(to-r, rgba(0,0,0,0), gray.900)"
          pointerEvents="none"
        />
      </Box>
    </Box>
  );
};

export default CastCardList;
