import {
  Text,
  useColorMode,
  useColorModeValue,
  Flex,
  Box,
  IconButton,
  Icon,
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
  const primaryTextColor = useColorModeValue('#777777', '#A4A7C1');
  return (
    <Box
      width="100%"
      boxShadow="0 -10px 10px rgba(0,0,0,.2)"
      position="relative"
      marginTop="3rem"
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
          <IconButton
            as="a"
            fontSize="1.4rem"
            variant="ghost"
            icon={<FaTwitter />}
          />
          <IconButton
            as="a"
            fontSize="1.4rem"
            variant="ghost"
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            fontSize="1.4rem"
            variant="ghost"
            icon={<FaLinkedin />}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
