import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    heading: 'Karbon',
    body: 'Karbon',
  },
  colors: {
    sail: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('black', 'white')(props),
        bgColor: mode('white', '#121212')(props),
        margin: '0 auto',
      },
    }),
  },
  components: {},
  textStyles: {
    h1: {
      fontWeight: 'black',
      lineHeight: '100px',
    },
    h2: {
      fontSize: ['1rem', '2rem'],
      fontWeight: 'bold',
      // mt: ['100px'],
    },
    paragraph: {
      fontSize: ['1.125rem', '1.25rem'],
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      marginInlineStart: '0px',
      marginInlineEnd: '0px',
      overflow: 'hidden',
    },
    link: {
      color: '#567dbd',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
