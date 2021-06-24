import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Tooltip,
  VStack
} from '@chakra-ui/react';
import { Logo } from 'components/Icons';
import NextLink from 'next/link';
import { GoSearch } from 'react-icons/go';
import navItems from './navItems';

type HeaderProps = {
  onSearchOpen: () => void;
};

const Header: React.FC<HeaderProps> = ({ onSearchOpen }) => {
  return (
    <Box
      as="header"
      h={[14, null, '100vh']}
      maxW={['full', null, 20]}
      w="full"
      bg="gray.800"
      flexShrink={0}
    >
      <Flex
        direction={['row', null, 'column']}
        align="center"
        w="full"
        h="full"
        py={[0, null, 6]}
        px={[6, null, 0]}
      >
        <Box mb={[0, null, 10]}>
          <NextLink href="/">
            <a>
              <Icon
                as={Logo}
                w={[9, null, 12]}
                h={[9, null, 12]}
                color="#56fff1"
              />
            </a>
          </NextLink>
        </Box>
        <VStack as="nav" spacing={0} display={['none', null, 'flex']}>
          <Tooltip label="Search" placement="right">
            <IconButton
              onClick={onSearchOpen}
              icon={<GoSearch size={24} />}
              w={20}
              h={20}
              color="gray.400"
              rounded={0}
              variant="ghost"
              _hover={{ bg: 'gray.700' }}
              aria-label="Search Button"
            ></IconButton>
          </Tooltip>
          {navItems.map(item => (
            <NextLink href={item.href} key={item.id}>
              <a>
                <Tooltip label={item.name} placement="right">
                  <Center w={20} h={20} _hover={{ bg: 'gray.700' }}>
                    <Icon as={item.icon} w={6} h={6} color="gray.400" />
                  </Center>
                </Tooltip>
              </a>
            </NextLink>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Header;
