import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Search from 'components/Search/Search';
import React from 'react';
import Header from './Navigation/Header';
import NavMobile from './Navigation/NavMobile';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex direction={['column', null, 'row']} align="flex-start" h="100vh">
        <Header onSearchOpen={onOpen} />
        <Box as="main" w="full" overflowY="auto" h="full">
          {children}
        </Box>
        <NavMobile onSearchOpen={onOpen} />
      </Flex>
      {isOpen && <Search isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default Layout;
