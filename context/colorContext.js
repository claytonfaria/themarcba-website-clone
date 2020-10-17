import { useColorMode, useColorModeValue } from '@chakra-ui/core';
import { createContext, useContext } from 'react';

const ColorTheme = createContext();

export const useCustomColors = () => useContext(ColorTheme);

export function CustomColorProvider({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuTextColor = useColorModeValue('#777777', '#FFFFFF');
  const highlightColor = useColorModeValue('#3c31e8', '#00c58e');
  const primaryTextColor = useColorModeValue('#737171', '#A4A7C1');

  return (
    <ColorTheme.Provider
      value={{
        colorMode,
        highlightColor,
        menuTextColor,
        primaryTextColor,
        toggleColorMode,
      }}
    >
      {children}
    </ColorTheme.Provider>
  );
}
