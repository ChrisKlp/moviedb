import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'gray.900',
        minWidth: '280px',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Poppins, sans-serif',
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
