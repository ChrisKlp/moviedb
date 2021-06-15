import { Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import navItems from './navItems';

type NavMobileProps = {};

const NavMobile: React.FC<NavMobileProps> = () => {
  return (
    <Flex w="full" h="full" justify="space-around" align="center" p={4}>
      {navItems.map(item => (
        <NextLink href={item.href}>
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
  );
};

export default NavMobile;