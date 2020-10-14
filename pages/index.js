import {
  Box,
  Heading,
  Icon,
  useColorModeValue,
  Text,
  Divider,
  Image,
  Flex,
  Button,
  ButtonGroup,
  Link,
} from '@chakra-ui/core';
import Head from 'next/head';
import { FaHeart } from 'react-icons/fa';
import { FiFeather } from 'react-icons/fi';

import HeroSVG from '../components/SVGs/heroSVG';
import styles from '../styles/home.module.css';

export default function Home() {
  const highlightColor = useColorModeValue('#3c31e8', '#00c58e');
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');
  const cardBgColor = useColorModeValue('white', '#0d1131');
  const tagBgColor = useColorModeValue('white', 'black');
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

      <Flex
        direction={['column', 'row']}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Flex
          margin="1rem"
          justifyContent="center"
          maxW="20.5rem"
          marginX="1rem"
          alignItems="center"
          direction="column"
        >
          <Image
            src="/image1.png"
            height="auto"
            width="100%"
            borderRadius=".5rem"
            alt="post image"
          />
          <Box
            zIndex="10"
            maxWidth="91%"
            height="100%"
            padding="1.25rem"
            paddingBottom="1.5rem"
            overflow="hidden"
            marginTop="-2.5rem"
            borderRadius=".5rem"
            background={cardBgColor}
            boxShadow="0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Flex wrap="wrap">
              <Text
                paddingX=".5rem"
                paddingY="0"
                marginRight=".5rem"
                marginBottom=".25rem"
                fontSize="1rem"
                fontWeight="550"
                borderRadius="9999px"
                backgroundColor={tagBgColor}
                textColor={primaryTextColor}
              >
                Next.js
              </Text>
            </Flex>
            <Heading fontSize="1.4rem" marginTop=".5rem" lineHeight="1.5">
              MarketNews
            </Heading>
            <Text
              fontSize=".8rem"
              marginBottom=".75rem"
              textColor={primaryTextColor}
            >
              July 9, 2020
            </Text>
            <Text
              fontSize="1rem"
              textAlign="justify"
              textColor={primaryTextColor}
            >
              In this post, we take a look a how we can use cronjobs to schedule
              tasks in Node.js
            </Text>
            <Flex
              alignItems="center"
              justifyContent="center"
              marginTop="0.8rem"
            >
              <ButtonGroup spacing={3}>
                <Link href="https://github.com/vercel/next.js" isExternal>
                  <Button
                    width="7rem"
                    variant="outline"
                    borderColor={highlightColor}
                    color={highlightColor}
                    fontWeight="700"
                  >
                    Live
                  </Button>
                </Link>
                <Link href="https://github.com/vercel/next.js" isExternal>
                  <Button
                    width="7rem"
                    variant="outline"
                    borderColor={highlightColor}
                    color={highlightColor}
                    fontWeight="700"
                  >
                    GitHub
                  </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
