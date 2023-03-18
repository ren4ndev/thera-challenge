const theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#1E5084',
    tertiary: '#FCCD2A',
    quarternary: '#707070',
    white: '#FFFFFF',
    gray: '#E8E8E8',
  },
  weight: {
    regular: '400',
    bold: '700',
    light: '300',
  },
  fonts: {
    sans: '"Open Sans", sans-serif;',
  },
  typography: {
    types: {
      body: {
        size: '20px',
        lineHeight: '27px',
      },
      regular: {
        size: '26px',
        lineHeight: '36px',
      },
      bold: {
        size: '30px',
        lineHeight: '41px',
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
