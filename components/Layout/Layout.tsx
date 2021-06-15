import { Box, Flex, HStack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Header from './Navigation/Header';
import NavMobile from './Navigation/NavMobile';

type LayoutProps = {};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isTablet] = useMediaQuery('(min-width: 768px)');
  console.log(isTablet);

  return (
    <>
      <Flex
        direction={isTablet ? 'row' : 'column'}
        spacing="0"
        align="flex-start"
      >
        <Box
          as="header"
          h={isTablet ? '100vh' : '16'}
          maxW={isTablet ? '20' : 'full'}
          w="full"
          top={0}
          left={0}
          position={isTablet ? 'sticky' : 'static'}
          bg="gray.900"
        >
          <Header isTablet={isTablet} />
        </Box>
        <Box as="main" w="full">
          {children}
        </Box>
        {!isTablet && (
          <Box
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
        )}
      </Flex>
    </>
  );
};

export default Layout;
