import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    heading: 'Graphik,Helvetica,Arial,sans-serif',
    body: 'Graphik,Helvetica,Arial,sans-serif',
  },
  colors: {
    sail: {
      100: '#f7fafc',
      900: '#000000',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode('black', 'white')(props),
        bgColor: mode('white', 'black')(props),
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
      textDecoration: 'underline',
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: true,
});

export default theme;
