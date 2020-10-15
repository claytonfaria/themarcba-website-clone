import {
  Image,
  Link,
  ListItem,
  UnorderedList,
  Flex,
  Text,
  HStack,
  Button,
  IconButton,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaMoon, FaSun } from 'react-icons/fa';

import BottomNavigation from './bottomNavigation';

export default function Header({ colorScheme }) {
  const {
    colorMode,
    toggleColorMode,
    menuTextColor,
    highlightColor,
  } = colorScheme;
  const router = useRouter();

  return (
    <Flex
      maxW="100%"
      paddingY={[2, 6]}
      px={[4, 5]}
      marginX="auto"
      justifyContent="space-between"
    >
      <UnorderedList listStyleType="none" marginLeft="6px">
        <ListItem>
          <NextLink href="/">
            <Link
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: 'none' }}
            >
              <Image
                boxSize="38px"
                src="/profile.webp"
                fallbackSrc="/profile.webp"
                objectFit="contain"
                alt="profile picture"
                overflow="hidden"
                marginRight=".5rem"
                border="2px"
                rounded="full"
                borderColor={highlightColor}
              />
              <Text
                fontSize="1.4rem"
                fontWeight="700"
                color={highlightColor}
                flexWrap="nowrap"
              >
                Clayton Faria
              </Text>
            </Link>
          </NextLink>
        </ListItem>
      </UnorderedList>

      <HStack
        as="ul"
        listStyleType="none"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="700"
        textColor={menuTextColor}
        fontSize="1.2rem"
        spacing={4}
        cursor="pointer"
      >
        <ListItem>
          <IconButton
            _hover={{ outline: 'none' }}
            size="sm"
            as="a"
            variant="ghost"
            onClick={toggleColorMode}
            fontSize={['1.4rem', '1.2rem']}
            color="#f6ad55"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            aria-label="Select color mode"
            cursor="pointer"
          />
        </ListItem>
        <ListItem display={['none', 'block']}>
          <NextLink href="/about">
            <Link
              textDecoration="none"
              _hover={{ borderBottom: '2px' }}
              color={router.pathname === '/about' && highlightColor}
            >
              About
            </Link>
          </NextLink>
        </ListItem>
        <ListItem display={['none', 'block']}>
          <NextLink href="/projects">
            <Link
              textDecoration="none"
              _hover={{ borderBottom: '2px' }}
              color={router.pathname === '/projects' && highlightColor}
            >
              Projects
            </Link>
          </NextLink>
        </ListItem>
        <ListItem display={['none', 'block']}>
          <NextLink href="/blog">
            <Link
              textDecoration="none"
              _hover={{ borderBottom: '2px' }}
              color={router.pathname === '/blog' && highlightColor}
            >
              Blog
            </Link>
          </NextLink>
        </ListItem>
        <Button
          as="li"
          display={['none', 'flex']}
          variant="outline"
          borderRadius="10px"
          border="2px"
          borderColor={highlightColor}
          color={highlightColor}
          fontSize="1.1rem"
          fontWeight="700"
          _hover={{
            bg: highlightColor,
            color: colorMode === 'dark' ? 'black' : 'white',
          }}
          _active={{
            bg: highlightColor,
            color: colorMode === 'dark' ? 'black' : 'white',
          }}
        >
          <NextLink href="/contact">Get in touch</NextLink>
        </Button>
      </HStack>
      <BottomNavigation colorScheme={colorScheme} />
    </Flex>
  );
}
