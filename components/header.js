import {
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
import { FaMoon, FaSun } from 'react-icons/fa';

import BottomNavigation from './bottomNavigation';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuTextColor = useColorModeValue('#777777', '#FFFFFF');
  const highlightColor = useColorModeValue('#3c31e8', '#00c58e');
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');
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
            <Image
              boxSize="38px"
              src="/profile.webp"
              fallbackSrc="/profile.webp"
              objectFit="contain"
              alt="profile picture"
              overflow="hidden"
              marginRight=".5rem"
              border="2px"
              borderRadius="100%"
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
        <ListItem display={['none', 'block']}>About</ListItem>
        <ListItem display={['none', 'block']}>Projects</ListItem>
        <ListItem display={['none', 'block']}>Blog</ListItem>
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
        >
          Get in Touch
        </Button>
      </HStack>
      <BottomNavigation
        colorMode={colorMode}
        primaryTextColor={primaryTextColor}
        highlightColor={highlightColor}
      />
    </Flex>
  );
}
