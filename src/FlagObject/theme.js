import { css } from '@emotion/core';

export default {
  breakpoints: ['40em', '52em', '64em', '72em'],
  colors: {
    pillar: {
      dark: '#005689',
      main: '#0084c6',
      bright: '#00b2ff',
      pastel: '#90dcff',
      faded: '#f1f8fc',
    },
    neutral: [
      '#121212', // brightness 7
      '#333333', // brightness 20
      '#767676', // brightness 46
      '#999999', // brightness 60
      '#dcdcdc', // brightness 86
      '#ededed', // brightness 93
      '#f6f6f6', // brightness 97
      '#ffffff', // brightness 100
    ],
    black: '#121212',
    primary: '#78f0a6',
    white: '#ffffff',
    color: '#999',
    gray: '#767676',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [16, 32, 64, 80, 128, 192, 256, 288, 384, 512, 768, 1024, 1536],
  radii: [0, 8, 16, 9999, '100%'],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fonts: {
    serif: '"Libre Baskerville", Georgia, serif',
    sans:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
};

/* <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&display=swap" rel="stylesheet"> */
export const globalStyles = css`
  /* latin-ext */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'),
      url(https://fonts.gstatic.com/s/librebaskerville/v7/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWx8QDO-WyrubOA.woff2)
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'),
      url(https://fonts.gstatic.com/s/librebaskerville/v7/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQDO-Wyrs.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Libre Baskerville'), local('LibreBaskerville-Regular'),
      url(https://fonts.gstatic.com/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMaC82U-ro.woff2)
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Libre Baskerville'), local('LibreBaskerville-Regular'),
      url(https://fonts.gstatic.com/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxMaC82U.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'),
      url(https://fonts.gstatic.com/s/librebaskerville/v7/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY5KcC-wLOjAUw.woff2)
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'),
      url(https://fonts.gstatic.com/s/librebaskerville/v7/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcC-wLOj.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    background-color: #fff;
    cursor: auto;
  }
`;
