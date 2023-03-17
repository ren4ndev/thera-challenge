const theme = {
  colors: {
    primary: '#0A192F',
    secondary: '#46B4A2',
    tertiary: '#46B4A0',
    quarternary: '#7611D4',
    white: '#f8f9fa',
    'textscale-01': '#f8f9fa',
    'textscale-02': '#e9ecef',
    'textscale-03': '#dee2e6',
    'textscale-04': '#ced4da',
    'textscale-05': '#adb5bd',
    'textscale-06': '#6c757d',
    'textscale-07': '#343a40',
    'textscale-08': '#343a40',
    'textscale-09': '#212529',
    'background-scale-01': '#328173',
    'background-scale-02': '#399281',
    'background-scale-03': '#3FA390',
    'background-scale-04': '#46B4A0',
    'background-scale-05': '#55BDAA',
    'background-scale-06': '#66C3B2',
    'background-scale-07': '#77CABB',
    'background-scale-08': '#88D1C3',
    'background-scale-09': '#99D7CC',
  },
  weight: {
    regular: '400',
    bold: '700',
    light: '300',
  },
  fonts: {
    mono: '"Roboto Mono", monospace;',
    logo: '"Bowlby One SC", cursive;',
    sans: '"Heebo", sans-serif;',
  },
  typography: {
    types: {
      'display-01': {
        size: '4.0rem',
        lineHeight: '4.8rem',
        mobileSize: '3.0rem',
        mobileLineHeight: '3.8rem',
      },
      'display-02': {
        size: '3.2rem',
        lineHeight: '4.0rem',
        mobileSize: '2.2rem',
        mobileLineHeight: '3.0rem',
      },
      'heading-01': {
        size: '2.8rem',
        lineHeight: '3.6rem',
        mobileSize: '2rem',
        mobileLineHeight: '2.8rem',
      },
      'heading-02': {
        size: '2.4rem',
        lineHeight: '3.2rem',
        mobileSize: '1.6rem',
        mobileLineHeight: '2.4rem',
      },
      'heading-03': {
        size: '2rem',
        lineHeight: '2.8rem',
        mobileSize: '1.2rem',
        mobileLineHeight: '2rem',
      },
      'heading-04': {
        size: '1.8rem',
        lineHeight: '2.6rem',
        mobileSize: '1rem',
        mobileLineHeight: '1.8rem',
      },
      'body-01': {
        size: '1.4rem',
        lineHeight: '2rem',
        mobileSize: '1.2rem',
        mobileLineHeight: '1.8rem',
      },
      'body-02': {
        size: '1rem',
        lineHeight: '1.6rem',
        mobileSize: '0.8rem',
        mobileLineHeight: '1.4rem',
      },
      'caption-01': {
        size: '0.8rem',
        lineHeight: '1.4rem',
        mobileSize: '0.6rem',
        mobileLineHeight: '1.2rem',
      },
      'caption-02': {
        size: '0.6rem',
        lineHeight: '1.2rem',
        mobileSize: '0.4rem',
        mobileLineHeight: '1rem',
      },
    },
  },
};

const breakpoints = {
  xsmall: '320px',
  small: '480px',
  xmedium: '768px',
  medium: '1024px',
  large: '1200px',
  xlarge: '1920px',
};

export {
  theme,
  breakpoints,
};
