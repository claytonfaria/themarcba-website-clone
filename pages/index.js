import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Hello Clayton</h1>
      <IconButton
        size="sm"
        as="a"
        variant="ghost"
        onClick={toggleColorMode}
        icon={
          colorMode === 'light' ? (
            <FaMoon color="rgb(3,7,173)" />
          ) : (
            <FaSun color="rgb(230,190,30)" />
          )
        }
        aria-label="Select color mode"
      /> */}
    </>
  );
}
