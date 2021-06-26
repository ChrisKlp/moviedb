import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '90em',
});

export default extendTheme({
  styles: {
    global: {
      '@media (min-width: 768px)': {
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#4A5568 #171923',
        },
        '*::-webkit-scrollbar': {
          width: '10px',
          height: '10px',
        },
        '*::-webkit-scrollbar-track': {
          background: '#171923',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#4A5568',
          borderRadius: '20px',
          border: '3px solid #171923',
        },
      },
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
    heading: 'Barlow, sans-serif',
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
  breakpoints,
});
