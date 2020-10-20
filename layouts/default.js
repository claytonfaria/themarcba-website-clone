import { Container, Flex } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { cloneElement } from 'react';

import {
  BottomNavigation,
  Footer,
  Header,
  PageMetadata,
} from '../components/base';
import { projects } from '../data';

export default function Layout({ children, router }) {
  const MotionContainer = motion.custom(Container);

  const siteTitle =
    'Web Developer | Clayton Faria | JavaScript | React.js | Next.js | Node.js';

  const pageTransitionAnimation = {
    pageAnimate: {
      opacity: 1,
    },
    pageInitial: {
      opacity: 0,
    },
    transition: {
      duration: 0.5,
    },
  };

  return (
    <>
      <PageMetadata siteTitle={siteTitle} />
      <Header />
      <Flex direction="column" minHeight="90vh">
        <MotionContainer
          maxWidth={['768px', '768px', '768px', '1024px']}
          marginBottom={['6rem', '0']}
          paddingX={5}
          marginX="auto"
          flex="1"
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          transition="transition"
          variants={pageTransitionAnimation}
        >
          {cloneElement(children, { projects })}
        </MotionContainer>
        <BottomNavigation />
        <Footer />
      </Flex>
    </>
  );
}
