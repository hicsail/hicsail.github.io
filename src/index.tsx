import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import Fonts from './utils/fonts';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
