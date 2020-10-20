import { Heading, Text, Icon } from '@chakra-ui/core';
import { AiOutlineStock } from 'react-icons/ai';
import { BiMicrochip } from 'react-icons/bi';
import {
  FaRegSmileBeam,
  FaUserTie,
  FaCode,
  FaHiking,
  FaPlaneDeparture,
} from 'react-icons/fa';

import { useCustomColors } from '../../context/colorContext';

export default function Interests() {
  const { primaryTextColor } = useCustomColors();

  return (
    <>
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
        Job <Icon verticalAlign="-5%" fontSize="1.8rem" as={FaUserTie} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        I'm interested to work in companies that use{' '}
        <strong>
          modern technologies such as React, Next.js, Vue.js, Nuxt.js, Node.js,
        </strong>{' '}
        and etc. I am looking for a role that challenges and gives me
        opportunities to learn.
      </Text>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        Travel{' '}
        <Icon verticalAlign="-15%" fontSize="1.8rem" as={FaPlaneDeparture} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        I love traveling, especially to mountains and lakes. Beautiful
        landscapes are one of the first things I consider when planning to visit
        somewhere.
      </Text>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        Technology{' '}
        <Icon verticalAlign="-25%" fontSize="1.8rem" as={BiMicrochip} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        I am passionate about technological advances, mainly in the space
        exploration, big machines, robots and I love reading science fiction
        books.
      </Text>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        Coding <Icon verticalAlign="-25%" fontSize="1.8rem" as={FaCode} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        I rediscovered coding after a long hiatus and I've been very happy and
        looking forward to keep learning and create awesome things.
      </Text>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        Securities Trading{' '}
        <Icon verticalAlign="-25%" fontSize="1.8rem" as={AiOutlineStock} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        I enjoy using technical analysis to decide my stocks/futures
        investiments and trading. I trade Brazilian(B3) and Taiwan(TAIEX)
        securities.
      </Text>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        Sports <Icon verticalAlign="-15%" fontSize="1.8rem" as={FaHiking} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        Besides going to gym frequently, I really enjoy hiking, biking and just
        having fun in some outdoor activity.
      </Text>
    </>
  );
}
