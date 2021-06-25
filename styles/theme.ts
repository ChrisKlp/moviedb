import { extendTheme } from '@chakra-ui/react';

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
});
