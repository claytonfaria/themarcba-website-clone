import { Heading, Text, Box, Flex, Link, HStack, Icon } from '@chakra-ui/core';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import ContactSvg from '../components/svg/contactSvg';

export default function Contact({ colorScheme }) {
  const { primaryTextColor, highlightColor } = colorScheme;

  return (
    <Box marginTop="1.5rem">
      <Heading
        as="h1"
        fontSize="31px"
        lineHeight="1.5"
        fontWeight={['600', '630']}
        alignItems="center"
      >
        Let's talk 😊
      </Heading>
      <Flex direction={['column', 'row']}>
        <Box flex="1 0%">
          <ContactSvg color={highlightColor} />
        </Box>
        <Box flex="1 0%">
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop={['3.5rem', '1.5rem']}
            textColor={primaryTextColor}
            fontWeight="500"
          >
            Whether you are interested to do business, hire me or just want to
            chat, I am happy to talk to you.
          </Text>
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop={['3.5rem', '1.5rem']}
            textColor={primaryTextColor}
            fontWeight="500"
          >
            My preferred way of contact is via Twitter or email .
          </Text>
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop={['3.5rem', '1.5rem']}
            textColor={primaryTextColor}
            fontWeight="500"
          >
            Feel free to check out my social media presence below to get to know
            me better.
          </Text>
          <HStack justifyContent="center" alignItems="center" spacing={5}>
            <Link
              isExternal
              href="https://twitter.com/fariaclayton"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              role="group"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                fontSize="2.7rem"
                textColor={primaryTextColor}
                as={FaTwitter}
                _groupHover={{ transform: 'translateY(-8px)' }}
                transition="all .3s ease-in-out"
              />
              <Text
                opacity="0"
                textColor={highlightColor}
                _groupHover={{ opacity: '1' }}
                transition="all .3s ease-in-out"
                fontWeight="600"
              >
                Twitter
              </Text>
            </Link>
            <Link
              isExternal
              href="https://github.com/claytonfaria"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              role="group"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                fontSize="2.7rem"
                textColor={primaryTextColor}
                as={FaGithub}
                _groupHover={{ transform: 'translateY(-8px)' }}
                transition="all .3s ease-in-out"
              />
              <Text
                opacity="0"
                textColor={highlightColor}
                _groupHover={{ opacity: '1' }}
                transition="all .3s ease-in-out"
                fontWeight="600"
              >
                GitHub
              </Text>
            </Link>
            <Link
              isExternal
              href="https://linkedin.com/in/claytonfaria"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              role="group"
              _hover={{ textDecoration: 'none' }}
            >
              <Icon
                fontSize="2.7rem"
                textColor={primaryTextColor}
                as={FaLinkedin}
                _groupHover={{ transform: 'translateY(-8px)' }}
                transition="all .3s ease-in-out"
              />
              <Text
                opacity="0"
                textColor={highlightColor}
                _groupHover={{ opacity: '1' }}
                transition="all .3s ease-in-out"
                fontWeight="600"
              >
                LinkedIn
              </Text>
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
