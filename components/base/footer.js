import { Text, Flex, Box, IconButton, Icon, Link } from '@chakra-ui/core';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaHeart,
} from 'react-icons/fa';

import { useCustomColors } from '../../context/colorContext';

export default function Footer() {
  const { primaryTextColor, highlightColor } = useCustomColors();

  const buttonHoverEffect = {
    color: highlightColor,
    transform: 'translateY(-4px)',
  };

  return (
    <Box
      width="100%"
      marginTop="2.5rem"
      padding="1.25rem"
      color={primaryTextColor}
      marginBottom="0"
      paddingBottom="0.8rem"
      display={['none', 'block']}
    >
      <Flex alignItems="center" flexDirection="column">
        <Text display="flex" alignItems="center">
          This website is a clone of
          <Link isExternal href="https://marc.dev/ " color={highlightColor}>
            ** marc.dev **
          </Link>
          - All credits and design goes to Marc
        </Text>
        <Flex>
          <IconButton
            isExternal
            href="https://twitter.com/fariaclayton"
            as={Link}
            aria-label="twitter"
            fontSize="1.4rem"
            variant="ghost"
            icon={<FaTwitter />}
            cursor="pointer"
            _hover={buttonHoverEffect}
            _active={buttonHoverEffect}
          />

          <IconButton
            as={Link}
            isExternal
            href="https://github.com/claytonfaria"
            fontSize="1.4rem"
            variant="ghost"
            aria-label="Github"
            icon={<FaGithub />}
            cursor="pointer"
            _hover={buttonHoverEffect}
            _active={buttonHoverEffect}
          />
          <IconButton
            as={Link}
            isExternal
            href="https://linkedin.com/in/claytonfaria"
            fontSize="1.4rem"
            variant="ghost"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            cursor="pointer"
            _hover={buttonHoverEffect}
            _active={buttonHoverEffect}
          />
        </Flex>
      </Flex>
    </Box>
  );
}
