import { Heading, Flex, Button, Icon } from '@chakra-ui/core';
import NextLink from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import { NotFoundArt } from '../assets/illustrations';
import { useCustomColors } from '../context/colorContext';

export default function Custom404() {
  const { highlightColor, colorMode } = useCustomColors();

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <NotFoundArt />
      <Heading as="h1" fontSize="43px" lineHeight="1.5" fontWeight="600">
        Page Not Found!
      </Heading>

      <NextLink href="/">
        <Button
          margin="2rem"
          as="li"
          display="flex"
          variant="outline"
          borderRadius="10px"
          border="2px"
          borderColor={highlightColor}
          color={highlightColor}
          fontSize="1.1rem"
          fontWeight="700"
          cursor="pointer"
          _hover={{
            bg: highlightColor,
            color: colorMode === 'dark' ? 'black' : 'white',
          }}
          _active={{
            bg: highlightColor,
            color: colorMode === 'dark' ? 'black' : 'white',
          }}
        >
          <Icon as={FaArrowLeft} marginRight="4px" /> Go home
        </Button>
      </NextLink>
    </Flex>
  );
}
