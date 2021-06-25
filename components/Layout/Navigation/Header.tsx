import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Tooltip,
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
    <Box as="header" h={20} w="full" bg="gray.900">
      <Container>
        <Flex align="center" justify="space-between" w="full" h={20}>
          <Box>
            <NextLink href="/">
              <a>
                <Icon as={Logo} w={12} h={12} color="#56fff1" />
              </a>
            </NextLink>
          </Box>
          <HStack as="nav" spacing={[2, null, 4]}>
            <Tooltip label="Search" placement="bottom">
              <IconButton
                onClick={onSearchOpen}
                icon={<GoSearch size={18} />}
                color="gray.400"
                rounded="full"
                variant="ghost"
                _hover={{ bg: 'gray.700' }}
                aria-label="Search Button"
              />
            </Tooltip>
            <HStack spacing={[2, null, 4]} display={['none', 'flex']}>
              {navItems.map(item => (
                <NextLink href={item.href} key={item.id} passHref>
                  <Button
                    as="a"
                    leftIcon={item.icon}
                    color="gray.400"
                    rounded="full"
                    variant="ghost"
                    _hover={{ bg: 'gray.700' }}
                  >
                    {item.name}
                  </Button>
                </NextLink>
              ))}
            </HStack>
            <HStack spacing={[2, null, 4]} display={['flex', 'none']}>
              {navItems.map(item => (
                <NextLink href={item.href} key={item.id} passHref>
                  <IconButton
                    as="a"
                    icon={item.icon}
                    color="gray.400"
                    rounded="full"
                    variant="ghost"
                    _hover={{ bg: 'gray.700' }}
                    aria-label={item.name}
                    sx={{ svg: { width: '18px', height: '18px' } }}
                  />
                </NextLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
