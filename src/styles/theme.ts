import { extendTheme } from '@chakra-ui/react';

const breakpoints = ({
    sm: "30em",
    md: "48em",
    lg: "69em",
    xl: "90em",
    "2xl": "104em",
  });

  const colors = {
    gray: {
      900: '#20292E'
    },
    purple: {
      500: '#8A53FF',
      900: '#330693'
    }
  }

  const fonts = {
    heading: 'Poppins',
    body: 'Poppins'
};

const styles = {
  global: {
    'html, body': {
      color: 'white',
    }
  }
}

export const theme = extendTheme({
    colors,
    breakpoints,
    fonts, 
    styles,
});