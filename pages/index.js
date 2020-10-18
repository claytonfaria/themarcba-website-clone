import { Box, Heading, Icon, Text, Divider, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { FiFeather } from 'react-icons/fi';

import { HeroArt } from '../assets/illustrations';
import { CardsWrapper, DisplayCard } from '../components/projects';
import { useCustomColors } from '../context/colorContext';
import styles from '../styles/home.module.css';

export default function Home({ projects }) {
  const { primaryTextColor, highlightColor } = useCustomColors();

  return (
    <Box width="100%" marginTop="1.5rem">
      <Heading
        as="h1"
        fontSize="31px"
        lineHeight="1.5"
        fontWeight={['600', '630']}
      >
        Hello, I'm Clayton{' '}
        <Box as="span" className={styles.wave}>
          👋
        </Box>
        <br />
        and I{' '}
        <Icon
          textColor="red.500"
          verticalAlign="-.125rem"
          justifyContent="center"
          as={FaHeart}
        />{' '}
        web development
      </Heading>

      <HeroArt />
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop={['3.5rem', '1.5rem']}
        textColor={primaryTextColor}
        fontWeight="500"
      >
        I am a brazilian 🇧🇷 <strong>web developer</strong> living in awesome
        Taiwan 🇹🇼, the Heart of Asia. I mostly code with{' '}
        <strong>JavaScript</strong>
        (React.js/Next.js & Node.js), but have also some experience with Python
        and others.
      </Text>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        If you have any web development needs, feel free to{' '}
        <NextLink href="/contact">
          <Link color={highlightColor} fontWeight="600">
            contact{' '}
          </Link>
        </NextLink>
        or{' '}
        <NextLink href="/about">
          <Link color={highlightColor} fontWeight="600">
            get to know{' '}
          </Link>
        </NextLink>{' '}
        me a little better.
      </Text>
      <Divider orientation="horizontal" marginY="4rem" />
      <Heading
        as="h1"
        fontSize="31px"
        lineHeight="1.5"
        fontWeight={['600', '630']}
        display="flex"
        alignItems="center"
      >
        Projects <Icon as={FiFeather} marginX="4px" />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        Here are my featured projects:
      </Text>
      <CardsWrapper>
        {projects
          .filter((item) => item.featured)
          .map((item) => (
            <DisplayCard item={item} key={item.id} />
          ))}
      </CardsWrapper>
    </Box>
  );
}
