import { Box, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import navItems from './navItems';

type NavMobileProps = {};

const NavMobile: React.FC<NavMobileProps> = () => {
  return (
    <Box
      display={['block', null, 'none']}
      as="nav"
      h={20}
      w="full"
      bg="gray.800"
      flexShrink={0}
    >
      <Flex w="full" h="full" justify="space-around" align="center" p={4}>
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
