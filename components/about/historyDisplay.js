import { Heading, Icon } from '@chakra-ui/core';

import InfoSummary from './infoSummary';

export default function HistoryDisplay({ data, icon, title }) {
  return (
    <>
      <Heading
        as="h1"
        marginTop="2rem"
        marginBottom=".5rem"
        fontSize="2rem"
        fontWeight="700"
      >
        {title} <Icon verticalAlign="-15%" fontSize="2.2rem" as={icon} />
      </Heading>

      {data
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <InfoSummary details={item} key={item.id} />
        ))}
    </>
  );
}
