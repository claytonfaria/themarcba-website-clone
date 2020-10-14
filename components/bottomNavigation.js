import { Link, Text, HStack } from '@chakra-ui/core';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { FiFeather } from 'react-icons/fi';

export default function BottomNavigation({
  primaryTextColor,
  highlightColor,
  colorMode,
}) {
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
      <Link
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        _hover={{ textDecoration: 'none' }}
        color={highlightColor}
      >
        <AiOutlineHome />
        <Text>Home</Text>
      </Link>
      <Link
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        _hover={{ textDecoration: 'none' }}
      >
        <AiOutlineInfoCircle />
        <Text>About</Text>
      </Link>
      <Link
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        _hover={{ textDecoration: 'none' }}
      >
        <AiOutlineProject />
        <Text>Projects</Text>
      </Link>
      <Link
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        _hover={{ textDecoration: 'none' }}
      >
        <FiFeather />
        <Text>Blog</Text>
      </Link>
      <Link
        fontWeight="700"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        _hover={{ textDecoration: 'none' }}
      >
        <AiOutlineMail />
        <Text>Contact</Text>
      </Link>
    </HStack>
  );
}
