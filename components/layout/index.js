import { Container, Flex } from '@chakra-ui/core';
import { cloneElement } from 'react';

import { projects } from '../../data/projects.json';
import BottomNavigation from './bottomNavigation';
import Footer from './footer';
import Header from './header';
import pageMetadata from './pageMetadata';

export default function Layout({ children }) {
  const siteTitle =
    'Web Developer | Clayton Faria | JavaScript | React.js, Next.js, Node.js';

  return (
    <>
      <pageMetadata siteTitle={siteTitle} />
      <Header />
      <Flex direction="column" minHeight="90vh">
        <Container
          maxWidth={['768px', '768px', '768px', '1024px']}
          marginBottom={['6rem', '0']}
          paddingX={[4, 5]}
          flex="1"
        >
          {cloneElement(children, { projects })}
        </Container>
        <BottomNavigation />
        <Footer />
      </Flex>
    </>
  );
}
