import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/react';
import * as React from 'react';

interface Props {
  borderWidth: string;
}

export const ToggleColorButton: React.FC<Props> = ({
  borderWidth
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        size="lg"
        aria-label="Toggle NightMode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        borderColor={colorMode === 'light' ? 'black' : 'white'}
        borderWidth={borderWidth}
        variant="ghost"
        onClick={toggleColorMode}
      >
        Color Mode {colorMode === 'light' ? 'Dark' : 'Light'}
      </IconButton>
    </header>
  );
};

export default ToggleColorButton;
