import {
  Box,
  Heading,
  Image,
  Flex,
  Text,
  Icon,
  Divider,
} from '@chakra-ui/core';
import {
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
  FaLanguage,
  FaRegSmileBeam,
  FaUserTie,
} from 'react-icons/fa';

import {
  HistoryDisplay,
  LanguageSkills,
  TechSkills,
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
          border="2px"
        >
          <Image
            src="/profile-big.jpeg"
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
            Hello
          </Heading>
          <Text
            fontSize="1.2rem"
            marginBottom="2rem"
            marginTop="1rem"
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

      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Interests{' '}
        <Icon verticalAlign="-20%" fontSize="2.2rem" as={FaRegSmileBeam} />
      </Heading>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        Job <Icon verticalAlign="-10%" fontSize="1.8rem" as={FaUserTie} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias
        non nihil tenetur, dicta obcaecati velit reiciendis recusandae molestiae
        ab a reprehenderit harum error voluptatibus dolores facere est commodi
        fuga.
      </Text>
    </Box>
  );
}
