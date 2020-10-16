import { Heading, Icon, Text, Box } from '@chakra-ui/core';
import { FiFeather } from 'react-icons/fi';

import CardsWrapper from '../components/cardsWrapper';
import DisplayCard from '../components/displayCard';

export default function Projects({ colorScheme, projects }) {
  const { primaryTextColor } = colorScheme;

  return (
    <Box marginTop="1.5rem">
      <Heading
        as="h1"
        fontSize="31px"
        lineHeight="1.5"
        fontWeight={['600', '630']}
        display="flex"
        alignItems="center"
      >
        Projects <Icon as={FiFeather} marginX="4px" />
      </Heading>
      <Text
        fontSize="1.2rem"
        marginBottom="2rem"
        marginTop="1rem"
        textColor={primaryTextColor}
        fontWeight="500"
      >
        Here you can find my most important projects:
      </Text>

      <CardsWrapper>
        {projects
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <DisplayCard colorScheme={colorScheme} item={item} key={item.id} />
          ))}
      </CardsWrapper>
    </Box>
  );
}
