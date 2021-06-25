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
      <Flex
        direction={['column', null, 'row']}
        align="flex-start"
        h="100vh"
        position="relative"
      >
        <Header onSearchOpen={onOpen} />
        <Box
          as="main"
          w="full"
          h="full"
          overflowY="auto"
          mb={[20, null, 0]}
          pb={[0, null, 12]}
        >
          {children}
        </Box>
        <NavMobile onSearchOpen={onOpen} />
      </Flex>
      {isOpen && <Search isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default Layout;
