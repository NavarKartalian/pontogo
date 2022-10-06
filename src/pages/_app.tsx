import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from "@apollo/client";

import { theme } from '../styles/theme';
import { client } from '../lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp
