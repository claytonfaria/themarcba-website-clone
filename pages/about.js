import { Box, Heading, Image, Flex, Text, Icon } from '@chakra-ui/core';
import { FaLaptopCode } from 'react-icons/fa';

import WorkExperience from '../components/about/workExperience';
import { useCustomColors } from '../context/colorContext';

export default function About() {
  const { primaryTextColor } = useCustomColors();

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
      <WorkExperience
        employment={{
          company: 'Marc Backes Labs',
          dateAndCountry: 'July 2017 - Current · Luxembourg 🇱🇺',
          position: 'Freelancing',
        }}
      />
    </Box>
  );
}
