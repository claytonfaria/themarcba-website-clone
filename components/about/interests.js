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
import { interests } from '../../data';

export default function Interests() {
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
      <InterestItem data={interests[0]} icon={FaUserTie} />
      <InterestItem data={interests[1]} icon={FaPlaneDeparture} />
      <InterestItem data={interests[2]} icon={BiMicrochip} />
      <InterestItem data={interests[3]} icon={FaCode} />
      <InterestItem data={interests[4]} icon={AiOutlineStock} />
      <InterestItem data={interests[5]} icon={FaHiking} />
    </>
  );
}

function InterestItem({ data, icon }) {
  const { primaryTextColor } = useCustomColors();
  return (
    <>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="1.75rem"
        fontWeight="700"
      >
        {data.title} <Icon verticalAlign="-15%" fontSize="1.8rem" as={icon} />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        {data.description}
      </Text>
    </>
  );
}
