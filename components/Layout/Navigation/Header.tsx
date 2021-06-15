import { Box, Center, Flex, Icon, Tooltip, VStack } from '@chakra-ui/react';
import { Logo } from 'components/Icons';
import NextLink from 'next/link';
import navItems from './navItems';

const Header: React.FC = () => {
  return (
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
        {navItems.map(item => (
          <NextLink href={item.href} key={item.id}>
            <a>
              <Tooltip label={item.name} placement="right">
                <Center w={20} h={20} _hover={{ bg: 'gray.800' }}>
                  <Icon as={item.icon} w={6} h={6} color="gray.400" />
                </Center>
              </Tooltip>
            </a>
          </NextLink>
        ))}
      </VStack>
    </Flex>
  );
};

export default Header;
