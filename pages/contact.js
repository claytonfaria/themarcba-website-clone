import { Heading, Text, Box, Flex } from '@chakra-ui/core';

import ContactSvg from '../components/SVGs/contactSvg';

export default function Contact({ colorScheme }) {
  const { primaryTextColor } = colorScheme;
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
          <ContactSvg />
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
        </Box>
      </Flex>
    </Box>
  );
}
