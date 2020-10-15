import { useColorMode, useColorModeValue, Container } from '@chakra-ui/core';
import { cloneElement } from 'react';

import Footer from './footer';
import Header from './header';

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuTextColor = useColorModeValue('#777777', '#FFFFFF');
  const highlightColor = useColorModeValue('#3c31e8', '#00c58e');
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');

  return (
    <>
      <Header
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        menuTextColor={menuTextColor}
        highlightColor={highlightColor}
        primaryTextColor={primaryTextColor}
      />
      <Container
        maxWidth={['768px', '768px', '768px', '1024px']}
        minHeight="100vh"
        marginBottom={['6rem', '0']}
        paddingX={[4, 5]}
      >
        {cloneElement(children, {
          highlightColor,
          primaryTextColor,
        })}
      </Container>
      <Footer
        highlightColor={highlightColor}
        primaryTextColor={primaryTextColor}
        colorMode={colorMode}
      />
    </>
  );
}
