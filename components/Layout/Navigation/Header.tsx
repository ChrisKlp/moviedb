import { Box, Center, Flex, Icon, Tooltip, VStack } from '@chakra-ui/react';
import { Logo } from 'components/Icons';
import NextLink from 'next/link';
import navItems from './navItems';

type HeaderProps = {
  isTablet: boolean;
};

const Header: React.FC<HeaderProps> = ({ isTablet }) => {
  return (
    <Flex
      direction={isTablet ? 'column' : 'row'}
      align="center"
      w="full"
      h="full"
      py={isTablet ? '6' : '0'}
      px={isTablet ? '0' : '6'}
    >
      <Box mb={isTablet ? '10' : '0'}>
        <NextLink href="/">
          <a>
            <Icon
              as={Logo}
              w={isTablet ? '12' : '9'}
              h={isTablet ? '12' : '9'}
              color="#56fff1"
            />
          </a>
        </NextLink>
      </Box>
      {isTablet && (
        <VStack as="nav" spacing={0}>
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
      )}
    </Flex>
  );
};

export default Header;
