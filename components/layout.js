import { Container } from '@chakra-ui/core';

import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        maxWidth="768px"
        minHeight="100vh"
        marginBottom="6rem"
        paddingX={[4, 5]}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}
