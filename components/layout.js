import { Container } from '@chakra-ui/core';

import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        maxWidth={['768px', '768px', '768px', '1024px']}
        minHeight="100vh"
        marginBottom={['6rem', '0']}
        paddingX={[4, 5]}
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}
