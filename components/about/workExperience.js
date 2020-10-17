import { Box, Heading, Flex, Text } from '@chakra-ui/core';

import { useCustomColors } from '../../context/colorContext';

export default function WorkExperience({ employment }) {
  const { highlightColor, primaryTextColor } = useCustomColors();
  const { dateAndCountry, position, company } = employment;
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
              animation="ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
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
            <Heading fontSize="1.4rem">{position}</Heading>
            <Text
              textColor={primaryTextColor}
              fontWeight="700"
              fontSize="1.2rem"
            >
              {company}
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
