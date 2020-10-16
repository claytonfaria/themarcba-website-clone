import { theme as chakraTheme } from '@chakra-ui/core';
import { mode } from '@chakra-ui/theme-tools';
import { merge } from '@chakra-ui/utils';

const fonts = {
  fonts: {
    body: "'Zilla Slab', serif",
    heading: "'Zilla Slab', serif",
    mono: "'Zilla Slab', serif",
  },
};
const theme = merge(chakraTheme, fonts, {
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', '#070919')(props),
        transition: 'background-color 0.8s',
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
    }),
  },
});

export default theme;
