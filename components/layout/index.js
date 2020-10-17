import {
  useColorMode,
  useColorModeValue,
  Container,
  Flex,
} from '@chakra-ui/core';
import { cloneElement } from 'react';

import { projects } from '../../data/projects.json';
import BottomNavigation from './bottomNavigation';
import Footer from './footer';
import Header from './header';
import pageMetadata from './pageMetadata';

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuTextColor = useColorModeValue('#777777', '#FFFFFF');
  const highlightColor = useColorModeValue('#3c31e8', '#00c58e');
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');

  const colorScheme = {
    colorMode,
    highlightColor,
    menuTextColor,
    primaryTextColor,
    toggleColorMode,
  };

  const siteTitle =
    'Web Developer | Clayton Faria | JavaScript | React.js, Next.js, Node.js';

  return (
    <>
      <pageMetadata siteTitle={siteTitle} />
      <Header colorScheme={colorScheme} />
      <Flex direction="column" minHeight="90vh">
        <Container
          maxWidth={['768px', '768px', '768px', '1024px']}
          marginBottom={['6rem', '0']}
          paddingX={[4, 5]}
          flex="1"
        >
          {cloneElement(children, { colorScheme, projects })}
        </Container>
        <BottomNavigation colorScheme={colorScheme} />
        <Footer colorScheme={colorScheme} />
      </Flex>
    </>
  );
}
