import { Box, useDisclosure } from '@chakra-ui/react';
import Search from 'components/Search/Search';
import React from 'react';
import Header from './Navigation/Header';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header onSearchOpen={onOpen} />
      <Box as="main" w="full">
        {children}
      </Box>
      {isOpen && <Search isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

export default Layout;
