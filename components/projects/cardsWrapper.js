import { Flex } from '@chakra-ui/core';

export default function CardsWrapper({ children }) {
  return (
    <Flex
      direction={['column', 'row']}
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      {children}
    </Flex>
  );
}
