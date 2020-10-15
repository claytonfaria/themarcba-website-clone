import {
  Text,
  useColorMode,
  useColorModeValue,
  Flex,
  Box,
  IconButton,
  Icon,
  Link,
} from '@chakra-ui/core';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaHeart,
} from 'react-icons/fa';

export default function Footer() {
  const { colorMode } = useColorMode();
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');
  const highlightColor = useColorModeValue('#3c31e8', '#00c58e');

  return (
    <Box
      width="100%"
      boxShadow="0 -10px 10px rgba(0,0,0,.2)"
      position="relative"
      marginTop="2.5rem"
      padding="1.25rem"
      background={colorMode === 'dark' && '#0d1131'}
      color={primaryTextColor}
      marginBottom="0"
      paddingBottom="0.8rem"
      display={['none', 'block']}
    >
      <Flex alignItems="center" flexDirection="column">
        <Text display="flex" alignItems="center">
          <Icon marginX="4px" as={FaCode} /> with
          <Icon marginX="4px" textColor="red.600" as={FaHeart} />
          by Clayton Faria &copy; 2020
        </Text>
        <Flex>
          <Link isExternal href="https://twitter.com/fariaclayton">
            <IconButton
              fontSize="1.4rem"
              variant="ghost"
              icon={<FaTwitter />}
              cursor="pointer"
              _hover={{
                color: highlightColor,
                transform: 'translateY(-4px)',
              }}
              _active={{
                color: highlightColor,
                transform: 'translateY(-4px)',
              }}
            />
          </Link>

          <Link isExternal href="https://github.com/claytonfaria">
            <IconButton
              fontSize="1.4rem"
              variant="ghost"
              icon={<FaGithub />}
              cursor="pointer"
              _hover={{
                color: highlightColor,
                transform: 'translateY(-4px)',
              }}
              _active={{
                color: highlightColor,
                transform: 'translateY(-4px)',
              }}
            />
          </Link>
          <Link isExternal href="https://linkedin.com/in/claytonfaria">
            <IconButton
              fontSize="1.4rem"
              variant="ghost"
              icon={<FaLinkedin />}
              cursor="pointer"
              _hover={{
                color: highlightColor,
                transform: 'translateY(-4px)',
              }}
              _active={{
                color: highlightColor,
                transform: 'translateY(-4px)',
              }}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
