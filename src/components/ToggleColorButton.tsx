import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/react';
import * as React from 'react';

const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        size="lg"
        aria-label="Toggle NightMode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        variant="ghost"
        onClick={toggleColorMode}
      >
        Color Mode {colorMode === 'light' ? 'Dark' : 'Light'}
      </IconButton>
    </header>
  );
};

export default ToggleColorButton;
