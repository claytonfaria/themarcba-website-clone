import { Box, Heading, Flex, Text, Icon } from '@chakra-ui/core';

import { useCustomColors } from '../../context/colorContext';

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

function InfoSummary({ details }) {
  const { highlightColor, primaryTextColor } = useCustomColors();
  const { dateAndCountry, title, organization, featured } = details;
  return (
    <>
      <Flex direction="column" marginTop="0.8rem" marginBottom="1.4rem">
        <Flex alignItems="center">
          <Box
            width="1rem"
            position="relative"
            marginRight="1.5rem"
            height="1rem"
            display="flex"
          >
            <Box
              width="100%"
              position="absolute"
              height="100%"
              display="inline-flex"
              borderWidth="2px"
              borderRadius="full"
              borderColor={highlightColor}
              animation={`${
                featured && 'ping'
              } 1s cubic-bezier(0, 0, 0.2, 1) infinite`}
            />
            <Box
              width="1rem"
              height="1rem"
              borderWidth="2px"
              display="inline-flex"
              position="relative"
              borderRadius="full"
              borderColor={highlightColor}
            />
          </Box>
          <Box flex="1">
            <Text fontWeight="500" textColor={primaryTextColor}>
              {dateAndCountry}
            </Text>
            <Heading fontSize="1.4rem">{title}</Heading>
            <Text
              textColor={primaryTextColor}
              fontWeight="700"
              fontSize="1.2rem"
            >
              {organization}
            </Text>
          </Box>
        </Flex>
      </Flex>

      <style global jsx>
        {`
          @keyframes ping {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            75%,
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
