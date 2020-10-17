import { Box, Heading, Image, Flex, Text, Icon } from '@chakra-ui/core';
import { FaLaptopCode } from 'react-icons/fa';

export default function About({ colorScheme }) {
  const { primaryTextColor, highlightColor } = colorScheme;
  return (
    <Box>
      <Flex>
        <Image
          src="/profile-big.jpeg"
          alt="Clayton Faria profile picture"
          marginRight="5rem"
          marginBottom="2rem"
          width="12rem"
          overflow="hidden"
          marginTop="2rem"
        />
        <Box flex="1">
          <Heading as="h1" marginTop="2.2rem" fontSize="2rem" fontWeight="600">
            Hello
          </Heading>
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop={['3.5rem', '1.5rem']}
            textColor={primaryTextColor}
            fontWeight="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            molestias non nihil tenetur, dicta obcaecati velit reiciendis
            recusandae molestiae ab a reprehenderit harum error voluptatibus
            dolores facere est commodi fuga.
          </Text>
        </Box>
      </Flex>
      <Heading as="h1" marginTop="2rem" fontSize="2rem" fontWeight="700">
        Work experience{' '}
        <Icon verticalAlign="-15%" fontSize="2.2rem" as={FaLaptopCode} />
      </Heading>
      <Flex direction="column" marginTop="0.8rem" marginBottom="1.4rem">
        <Flex alignItems="center">
          <Box
            width="1rem"
            position="relative"
            marginRight="1.5rem"
            height="1rem"
            display="flex"
          >
            <Box
              width="100%"
              position="absolute"
              height="100%"
              display="inline-flex"
              borderWidth="2px"
              borderRadius="full"
              borderColor={highlightColor}
              animation="ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
            />
            <Box
              width="1rem"
              height="1rem"
              borderWidth="2px"
              display="inline-flex"
              position="relative"
              borderRadius="full"
              borderColor={highlightColor}
            />
          </Box>
          <Box flex="1">
            <Text fontWeight="500" textColor={primaryTextColor}>
              July 2017 - Current · Luxembourg 🇱🇺
            </Text>
            <Heading fontSize="1.4rem">
              Freelancing full-stack web developer
            </Heading>
            <Text
              textColor={primaryTextColor}
              fontWeight="700"
              fontSize="1.2rem"
            >
              Marc Backes Software Labs
            </Text>
          </Box>
        </Flex>
      </Flex>

      <style global jsx>
        {`
          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            75%,
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
}
