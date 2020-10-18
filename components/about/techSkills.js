import { Box, Heading, Image, Flex, Icon } from '@chakra-ui/core';

export default function TechSkills({ icon, colorMode }) {
  return (
    <>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Tech skills <Icon verticalAlign="-15%" fontSize="2rem" as={icon} />
      </Heading>
      <Flex justifyContent="center" flexWrap="wrap">
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/javascript.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/css.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/html.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/react.svg"
            maxWidth="8rem"
            height="4rem"
            marginY="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/nextjs.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/node.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/python.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
        <Box
          margin="1rem"
          borderRadius=".5rem"
          background={colorMode === 'dark' && 'white'}
        >
          <Image
            src="/images/skills/pandas.svg"
            maxWidth="8rem"
            height="4rem"
            margin="1rem"
          />
        </Box>
      </Flex>
    </>
  );
}
