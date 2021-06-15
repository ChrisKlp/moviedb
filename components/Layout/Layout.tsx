import { Box, Flex, HStack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Header from './Navigation/Header';
import NavMobile from './Navigation/NavMobile';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex direction={['column', null, 'row']} spacing="0" align="flex-start">
        <Box
          as="header"
          h={[16, null, '100vh']}
          maxW={['full', null, 20]}
          w="full"
          top={0}
          left={0}
          position={['static', null, 'sticky']}
          bg="gray.900"
        >
          <Header />
        </Box>
        <Box as="main" w="full">
          {children}
        </Box>
        <Box
          display={['block', null, 'none']}
          as="nav"
          h={20}
          w="full"
          position="fixed"
          bg="gray.900"
          bottom={0}
          left={0}
        >
          <NavMobile />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
