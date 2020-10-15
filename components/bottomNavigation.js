import { Link, Text, HStack } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { FiFeather } from 'react-icons/fi';

export default function BottomNavigation({ colorScheme }) {
  const { primaryTextColor, highlightColor, colorMode } = colorScheme;

  const router = useRouter();
  return (
    <HStack
      width="100%"
      boxShadow="0 -10px 10px rgba(0,0,0,.2)"
      left="0"
      bottom="0"
      position="fixed"
      height="5rem"
      justifyContent="space-evenly"
      alignItems="center"
      background={colorMode === 'dark' ? '#0d1131' : 'white'}
      color={primaryTextColor}
      display={['flex', 'none']}
      zIndex={1000}
    >
      <NextLink href="/">
        <Link
          fontWeight="700"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          _hover={{ textDecoration: 'none' }}
          color={router.pathname === '/' && highlightColor}
        >
          <AiOutlineHome />
          <Text>Home</Text>
        </Link>
      </NextLink>
      <NextLink href="/about">
        <Link
          fontWeight="700"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          _hover={{ textDecoration: 'none' }}
          color={router.pathname === '/about' && highlightColor}
        >
          <AiOutlineInfoCircle />
          <Text>About</Text>
        </Link>
      </NextLink>
      <NextLink href="/projects">
        <Link
          fontWeight="700"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          _hover={{ textDecoration: 'none' }}
          color={router.pathname === '/projects' && highlightColor}
        >
          <AiOutlineProject />
          <Text>Projects</Text>
        </Link>
      </NextLink>
      <NextLink href="/blog">
        <Link
          fontWeight="700"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          _hover={{ textDecoration: 'none' }}
          color={router.pathname === '/blog' && highlightColor}
        >
          <FiFeather />
          <Text>Blog</Text>
        </Link>
      </NextLink>
      <NextLink href="/contact">
        <Link
          fontWeight="700"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          _hover={{ textDecoration: 'none' }}
          color={router.pathname === '/contact' && highlightColor}
        >
          <AiOutlineMail />
          <Text>Contact</Text>
        </Link>
      </NextLink>
    </HStack>
  );
}
