import {
  Box,
  Image,
  Link,
  ListItem,
  UnorderedList,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/core';
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiFeather } from 'react-icons/fi';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuTextColor = useColorModeValue('#777777', '#FFFFFF');
  const highlightTextColor = useColorModeValue('#5c61ff', '#00c58e');
  const primaryTextColor = useColorModeValue('#777777', '#A4A7C1');

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
          <Link display="flex" alignItems="center">
            <Box
              maxH="36px"
              maxW="36px"
              width="2.5rem"
              overflow="hidden"
              marginRight=".5rem"
            >
              <Image src="profile.jpeg" />
            </Box>
            <Text
              fontSize="1.4rem"
              fontWeight="700"
              color={highlightTextColor}
              flexWrap="nowrap"
            >
              Clayton Faria
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>

      <HStack
        listStyleType="none"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        fontWeight="700"
        textColor={menuTextColor}
        fontSize="1.2rem"
        spacing={4}
      >
        <ListItem>
          <IconButton
            _hover={{ outline: 'none' }}
            size="sm"
            as="a"
            variant="ghost"
            onClick={toggleColorMode}
            fontSize={['1.2rem', '1rem']}
            color="rgb(230,190,30)"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            aria-label="Select color mode"
          />
        </ListItem>
        <ListItem display={['none', 'block']}>About</ListItem>
        <ListItem display={['none', 'block']}>Projects</ListItem>
        <ListItem display={['none', 'block']}>Blog</ListItem>
        <Button
          display={['none', 'block']}
          variant="outline"
          borderRadius="10px"
          border="2px"
          borderColor={highlightTextColor}
          color={highlightTextColor}
          fontSize="1.1rem"
          fontWeight="700"
        >
          Get in Touch
        </Button>
      </HStack>

      <HStack
        width="100%"
        boxShadow="0 -10px 10px rgba(0,0,0,.2)"
        left="0"
        bottom="0"
        position="fixed"
        height="5rem"
        justifyContent="space-evenly"
        alignItems="center"
        background={colorMode === 'dark' && '#0d1131'}
        color={primaryTextColor}
        display={['flex', 'none']}
      >
        <Link
          fontWeight="700"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          _hover={{ textDecoration: 'none' }}
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
    </Flex>
  );
}
