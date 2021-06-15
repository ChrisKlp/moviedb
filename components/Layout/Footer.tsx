import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box bg="gray.900">
      <Container>
        <Flex py={6} align="center" justify="center">
          <Text fontSize={14} color="gray.500">
            &copy; 2021 by movieDB
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
