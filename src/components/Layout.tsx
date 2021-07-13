import { Box, Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Flex
      display="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="80%"
      margin="0 auto"
    >
      <Box marginBottom="30px" width="100%">
        <Heading marginBottom="15px">{title}</Heading>
      </Box>
      <Box width="100%">{children}</Box>
    </Flex>
  );
};
