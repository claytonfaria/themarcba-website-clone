import { ChakraProvider } from '@chakra-ui/core';

import { CustomColorProvider } from '../context/colorContext';
import Layout from '../layouts/default';
import theme from '../styles/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <CustomColorProvider>
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </CustomColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
