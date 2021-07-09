import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    sail: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Karbon',
    body: 'Karbon',
  },
});

export default theme;
