import { Box, Flex, HStack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Header from './Navigation/Header';
import NavMobile from './Navigation/NavMobile';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex direction={['column', null, 'row']} align="flex-start" h="100vh">
        <Header />
        <Box as="main" w="full" overflowY="auto" h="full">
          {children}
        </Box>
        <NavMobile />
      </Flex>
    </>
  );
};

export default Layout;
