import { Box, Heading, Image, Flex, Text, Divider } from '@chakra-ui/core';
import {
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
  FaLanguage,
} from 'react-icons/fa';

import {
  HistoryDisplay,
  LanguageSkills,
  TechSkills,
  Interests,
} from '../components/about';
import { useCustomColors } from '../context/colorContext';
import { education, workExperience } from '../data';

export default function About() {
  const { primaryTextColor, colorMode } = useCustomColors();

  return (
    <Box>
      <Flex
        direction={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          marginRight={['0', '0', '5rem']}
          marginBottom="2rem"
          width="12rem"
          height="12rem"
          overflow="hidden"
          marginTop="2rem"
          display="inline-block"
          justifyContent="center"
          alignSelf="center"
          position="relative"
          borderRadius="full"
          // border="2px"
        >
          <Image
            src="/images/profile-big.jpg"
            alt="Clayton Faria profile picture"
            objectFit="cover"
            height="100%"
            width="100%"
            position="absolute"
            top="0"
          />
        </Box>
        <Box flex="1 0%">
          <Heading
            as="h1"
            marginTop="2.2rem"
            fontSize="2rem"
            fontWeight="700"
            marginBottom=".5rem"
          >
            Hello 👋
          </Heading>
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop="1rem"
            textColor={primaryTextColor}
            fontWeight="500"
          >
            I'm Clayton, a <strong>web developer </strong>💻 with a diverse
            technology experience. For years I successfully launched and managed
            several PC components, currently I am focused on developing with
            JavaScript, mostly
            <strong> React.js / Next.js </strong>in the Front End and Node.js,
            Express for Back End.
          </Text>
        </Box>
      </Flex>

      {/* Work Experience */}
      <HistoryDisplay
        icon={FaLaptopCode}
        data={workExperience}
        title="Work Experience"
      />
      <Divider orientation="horizontal" marginY="4rem" />

      {/* Tech Skills */}
      <TechSkills icon={FaTools} colorMode={colorMode} />

      <Divider orientation="horizontal" marginY="4rem" />

      {/* Education */}
      <HistoryDisplay
        icon={FaGraduationCap}
        data={education}
        title="Education"
      />

      {/* Language Skills */}
      <LanguageSkills icon={FaLanguage} color={primaryTextColor} />
      <Interests />
    </Box>
  );
}
