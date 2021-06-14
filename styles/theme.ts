import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Manrope, sans-serif',
    body: 'Manrope, sans-serif',
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: '1440px',
        padding: '0',
        width: '90%',
      },
    },
  },
});
