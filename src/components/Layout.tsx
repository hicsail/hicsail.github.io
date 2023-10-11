import { Box, Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';

interface LayoutProps {
  title: string | null;
  children: React.ReactNode;
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
        {title == null ? (
          <></>
        ) : (
          <Heading marginBottom="10px" fontWeight="bold">
            {title}
          </Heading>
        )}
      </Box>
      <Box width="100%">{children}</Box>
    </Flex>
  );
};
