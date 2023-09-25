import * as React from 'react';
import { Image, Box } from '@chakra-ui/react';

export const Cardv2: React.FC = () => {
  return (
    <Box>
      <Image
        src={'../../img/sample.jpeg'}
        sx={{
          height: '200px',
          width: '270px',
          objectFit: 'cover',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          transformOrigin: 'top left',
          transition: 'transform 250ms ease',
          borderRadius: '7px',
        }}
      />
    </Box>
  );
};
