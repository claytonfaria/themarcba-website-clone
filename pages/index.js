import {
  Box,
  Container,
  Heading,
  Icon,
  useColorModeValue,
} from '@chakra-ui/core';
import Head from 'next/head';
import { FaHeart } from 'react-icons/fa';

import HeroSVG from '../components/SVGs/heroSVG';

export default function Home() {
  const highlightTextColor = useColorModeValue('#6c63ff', '#00c58e');
  return (
    <Box width="100%" marginTop="1.5rem">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading
        as="h1"
        fontSize="31px"
        lineHeight="1.5"
        fontWeight={['600', '630']}
      >
        Hello, I'm Clayton{' '}
        <Box as="span" className="wave">
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
      <Container maxWidth="100%" textAlign="center" padding="0" margin="0">
        <HeroSVG color={highlightTextColor} marginTop={['3.5rem', '3rem']} />
      </Container>
      <style global jsx>
        {`
          .wave {
            animation-name: wave-animation;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            transform-origin: 70% 70%;
            display: inline-block;
          }
          @keyframes wave-animation {
            0% {
              transform: rotate(0deg);
            }
            10% {
              transform: rotate(14deg);
            }
            20% {
              transform: rotate(-8deg);
            }
            30% {
              transform: rotate(14deg);
            }
            40% {
              transform: rotate(-4deg);
            }
            50% {
              transform: rotate(10deg);
            }
            60% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
    </Box>
  );
}
