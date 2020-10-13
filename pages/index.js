import { Box } from '@chakra-ui/core';
import Head from 'next/head';

export default function Home() {
  return (
    <Box height="100vh">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hero section</h1>
    </Box>
  );
}
