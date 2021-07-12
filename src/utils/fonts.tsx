import { Global } from '@emotion/react';
import * as React from 'react';

const Fonts = () => (
  <Global
    styles={`
        /* latin */
        @font-face {
          font-family: 'Karbon';
          font-style: normal;
          font-weight: bold;
          font-display: swap;
          src: url('../fonts/KarbonWeb-Medium.woff2') format('woff2'), url('../fonts/KarbonWeb-Medium.woff') format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* latin */
        @font-face {
          font-family: 'Karbon';
          font-style: normal;
          font-weight: bold;
          font-display: swap;
          src: url('../fonts/KarbonWeb-Regular.woff2') format('woff2'), url('../fonts/KarbonWeb-Regular.woff') format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        `}
  />
);
export default Fonts;
