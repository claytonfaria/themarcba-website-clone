import { Box, Heading, Image, Flex, Icon } from '@chakra-ui/core';

import { techSkills } from '../../data';

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
        {techSkills.map((skill, index) => (
          <Skill
            colorMode={colorMode}
            src={`/images/skills/${skill.toLowerCase()}.svg`}
            alt={skill}
            key={index}
          />
        ))}
      </Flex>
    </>
  );
}

function Skill({ colorMode, src, alt }) {
  return (
    <Box
      margin="1rem"
      borderRadius=".5rem"
      background={colorMode === 'dark' && 'white'}
    >
      <Image src={src} alt={alt} maxWidth="8rem" height="4rem" margin="1rem" />
    </Box>
  );
}
