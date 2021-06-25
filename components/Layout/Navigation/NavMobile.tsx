import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import navItems from './navItems';
import { GoSearch } from 'react-icons/go';

type NavMobileProps = {
  onSearchOpen: () => void;
};

const NavMobile: React.FC<NavMobileProps> = ({ onSearchOpen }) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      display={['block', null, 'none']}
      as="nav"
      h={20}
      w="full"
      bg="gray.800"
      flexShrink={0}
      zIndex="docked"
    >
      <Flex w="full" h="full" justify="space-around" align="center" p={4}>
        <VStack as="button" onClick={onSearchOpen}>
          <GoSearch size={20} color="#a0aec0" />
          <Text as="span" fontSize="xs" color="gray.400" flexShrink={0}>
            Search
          </Text>
        </VStack>
        {navItems.map(item => (
          <NextLink href={item.href} key={item.id}>
            <a>
              <VStack>
                <Icon as={item.icon} w={5} h={5} color="gray.400" />
                <Text fontSize="xs" color="gray.400" flexShrink={0}>
                  {item.name}
                </Text>
              </VStack>
            </a>
          </NextLink>
        ))}
      </Flex>
    </Box>
  );
};

export default NavMobile;
