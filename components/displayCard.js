import {
  Heading,
  useColorModeValue,
  Text,
  Image,
  Flex,
  Button,
  ButtonGroup,
  Link,
  colorMode,
  chakra,
} from '@chakra-ui/core';
import { motion } from 'framer-motion';

export default function DisplayCard({ colorScheme, item }) {
  const { title, date, description, tags, imgUrl } = item;
  const { highlightColor, primaryTextColor } = colorScheme;
  const cardBgColor = useColorModeValue('white', '#0d1131');
  const tagBgColor = useColorModeValue('white', 'black');

  const MotionBox = chakra(motion.div);
  const MotionImage = motion.custom(Image);

  const imageMotion = {
    hover: {
      y: -20,
    },
    tap: {
      y: -20,
    },
  };

  const boxMotion = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 1.05,
    },
  };

  return (
    <MotionBox
      display="flex"
      margin="1rem"
      justifyContent="center"
      maxW={['20.5rem', '20.5rem', '20.5rem', '24rem']}
      marginX="1rem"
      alignItems="center"
      alignSelf="flex-start"
      flexDirection="column"
      whileHover="hover"
      whileTap="tap"
    >
      <MotionImage
        src="/image1.png"
        height="auto"
        width="100%"
        borderRadius=".5rem"
        alt="post image"
        variants={imageMotion}
        pointerEvents="none"
      />
      <MotionBox
        zIndex="10"
        maxWidth="91%"
        height="100%"
        padding="1.25rem"
        paddingBottom="1.5rem"
        overflow="hidden"
        marginTop="-2.5rem"
        borderRadius=".5rem"
        background={cardBgColor}
        boxShadow="0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        variants={boxMotion}
      >
        <Flex wrap="wrap">
          {tags.map((tag, index) => (
            <Text
              key={index}
              paddingX=".5rem"
              paddingY="0"
              marginRight=".5rem"
              marginBottom=".25rem"
              fontSize="1rem"
              fontWeight="550"
              borderRadius="9999px"
              backgroundColor={tagBgColor}
              textColor={primaryTextColor}
            >
              {tag}
            </Text>
          ))}
        </Flex>
        <Heading fontSize="1.4rem" marginTop=".5rem" lineHeight="1.5">
          {title}
        </Heading>
        <Text
          fontSize=".8rem"
          marginBottom=".75rem"
          textColor={primaryTextColor}
        >
          {date}
        </Text>
        <Text fontSize="1rem" textAlign="justify" textColor={primaryTextColor}>
          {description}
        </Text>
        <Flex alignItems="center" justifyContent="center" marginTop="1.5rem">
          <ButtonGroup spacing={4}>
            <Link
              href="https://github.com/vercel/next.js"
              isExternal
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                width={['7rem', '7rem', '7rem', '8.3rem']}
                variant="outline"
                borderColor={highlightColor}
                color={highlightColor}
                fontWeight="700"
                _hover={{
                  bg: highlightColor,
                  color: colorMode === 'dark' ? 'black' : 'white',
                }}
                _active={{
                  bg: highlightColor,
                  color: colorMode === 'dark' ? 'black' : 'white',
                }}
              >
                Live
              </Button>
            </Link>
            <Link
              href="https://github.com/vercel/next.js"
              isExternal
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                width={['7rem', '7rem', '7rem', '8.3rem']}
                variant="outline"
                borderColor={highlightColor}
                color={highlightColor}
                fontWeight="700"
                _hover={{
                  bg: highlightColor,
                  color: colorMode === 'dark' ? 'black' : 'white',
                }}
                _active={{
                  bg: highlightColor,
                  color: colorMode === 'dark' ? 'black' : 'white',
                }}
              >
                GitHub
              </Button>
            </Link>
          </ButtonGroup>
        </Flex>
      </MotionBox>
    </MotionBox>
  );
}
