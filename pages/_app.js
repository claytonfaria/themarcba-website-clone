import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import Layout from '../components/layout';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    body: "'Zilla Slab', serif",
    heading: "'Zilla Slab', serif",
    mono: "'Zilla Slab', serif",
  },
  config: {
    useSystemColorMode: true,
    // initialColorMode: "light",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
