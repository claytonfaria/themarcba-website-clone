import {
  Box,
  Heading,
  Icon,
  useColorModeValue,
  Text,
  Divider,
} from '@chakra-ui/core';
import Head from 'next/head';
import { FaHeart } from 'react-icons/fa';
import { FiFeather } from 'react-icons/fi';

import HeroSVG from '../components/SVGs/heroSVG';
import styles from '../styles/home.module.css';

export default function Home() {
  const highlightColor = useColorModeValue('#6c63ff', '#00c58e');
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');
  return (
    <Box width="100%" marginTop="1.5rem">
      <Head>
        <title>Create Next App</title>
      </Head>

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

      <HeroSVG color={highlightColor} marginTop={['3.5rem', '3rem']} />
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop={['3.5rem', '1.5rem']}
        textColor={primaryTextColor}
        fontWeight="500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate
        fuga est autem ab labore? Tempore similique cumque neque obcaecati
        nesciunt, dicta autem! Natus, iste sapiente nihil debitis blanditiis
        saepe.
      </Text>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        If you have any web development needs, feel free to contact or get to
        know me a little better.
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
        Here are my most important projects:
      </Text>
    </Box>
  );
}
