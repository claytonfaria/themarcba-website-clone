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

import InfoSummary from '../components/about/infoSummary';
import { useCustomColors } from '../context/colorContext';

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
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Work experience{' '}
        <Icon verticalAlign="-15%" fontSize="2.2rem" as={FaLaptopCode} />
      </Heading>
      <InfoSummary
        details={{
          organization: 'Clayton Faria Labs',
          dateAndCountry: 'July 2017 - Current · Taipei ',
          title: 'Freelancing',
          featured: true,
        }}
      />
      <Divider orientation="horizontal" marginY="4rem" />
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Tech skills <Icon verticalAlign="-15%" fontSize="2rem" as={FaTools} />
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
      <Divider orientation="horizontal" marginY="4rem" />
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Education{' '}
        <Icon verticalAlign="-20%" fontSize="2.2rem" as={FaGraduationCap} />
      </Heading>
      <InfoSummary
        details={{
          organization: 'JavaScript, React.js, Next.js & others',
          dateAndCountry: 'May 2020 - Current · Taipei ',
          title: 'Self-Learning',
          featured: true,
        }}
      />
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        Language skills{' '}
        <Icon verticalAlign="-20%" fontSize="2.2rem" as={FaLanguage} />
      </Heading>
      <table
        style={{
          marginTop: '0.8rem',
          fontSize: '1.2rem',
          borderCollapse: 'collapse',
          color: primaryTextColor,
        }}
      >
        <tr>
          <td
            style={{
              fontWeight: '700',
              paddingRight: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            }}
          >
            English
          </td>
          <td
            style={{
              fontWeight: '500',
              paddingRight: '1rem',
              paddingLeft: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            }}
          >
            Fluent
          </td>
        </tr>
        <tr>
          <td style={{ fontWeight: '700', paddingRight: '1rem' }}>
            Portuguese
          </td>
          <td
            style={{
              fontWeight: '500',
              paddingRight: '1rem',
              paddingLeft: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
            }}
          >
            Mothertongue
          </td>
        </tr>
      </table>

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
