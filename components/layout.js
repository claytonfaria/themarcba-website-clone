import { useColorMode, useColorModeValue, Container } from '@chakra-ui/core';
import Head from 'next/head';
import { cloneElement } from 'react';

import { projects } from '../data/projects.json';
import Footer from './footer';
import Header from './header';

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Web Developer | Clayton Faria | JavaScript | React.js, Next.js, Node.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header colorScheme={colorScheme} />
      <Container
        maxWidth={['768px', '768px', '768px', '1024px']}
        minHeight="100vh"
        marginBottom={['6rem', '0']}
        paddingX={[4, 5]}
      >
        {cloneElement(children, { colorScheme, projects })}
      </Container>
      <Footer colorScheme={colorScheme} />
    </>
  );
}
