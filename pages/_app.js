import { ChakraProvider } from '@chakra-ui/core';

import Layout from '../components/layout';
import { CustomColorProvider } from '../context/colorContext';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CustomColorProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CustomColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
