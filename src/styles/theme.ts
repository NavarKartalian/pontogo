import { extendTheme } from '@chakra-ui/react';

const breakpoints = ({
    sm: "26rem",
    md: "37rem",
    lg: "74rem",
    xl: "90rem",
    "2xl": "120rem",
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