import Head from 'next/head';
import { useColorMode, Button } from '@chakra-ui/core';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello Clayton</h1>
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </>
  );
}
