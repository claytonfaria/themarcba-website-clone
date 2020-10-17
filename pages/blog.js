import { Heading, Text, Box, Flex, Link, Icon } from '@chakra-ui/core';
import { FaTwitter } from 'react-icons/fa';

import { BlogConstruction } from '../components/svg';
import { useCustomColors } from '../context/colorContext';

export default function Contact() {
  const { primaryTextColor, highlightColor } = useCustomColors();

  return (
    <Box marginTop="1.5rem">
      <Heading
        as="h1"
        fontSize="31px"
        lineHeight="1.5"
        fontWeight={['600', '630']}
        alignItems="center"
      >
        Blog is coming soon!
      </Heading>
      <Flex direction={['column', 'column', 'row']}>
        <Box flex="1 0%">
          <BlogConstruction color={highlightColor} />
        </Box>
        <Box flex="1 0%" alignSelf="center">
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop={['3.5rem', '1.5rem']}
            textColor={primaryTextColor}
            fontWeight="500"
          >
            Hi there 👋, this blog will soon be filled, in the meantime, you can
            checkout my{' '}
            <Link
              isExternal
              href="https://twitter.com/fariaclayton"
              color={highlightColor}
              fontWeight="600"
              transition="all .2s ease-in-out"
              _hover={{ borderBottom: '2px', textDecoration: 'none' }}
            >
              Twitter <Icon verticalAlign="-15%" as={FaTwitter} />
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
