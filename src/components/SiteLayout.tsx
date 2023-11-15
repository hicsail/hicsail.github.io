import { Box, Flex } from '@chakra-ui/react';
import { Banner } from './Banner';
import NavigationBar from './NavigationBar/NavigationBar';
import { OpportunitiesBanner } from './OpportunitiesBanner';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import * as React from 'react';

export const SiteLayout: React.FC = () => {
  return (
    <Box width="100%" height="100%">
      <Flex
        direction="column"
        align="center"
        margin="0 auto"
        width="100%"
        height="100%"
        minHeight="100vh"
        justifyContent="flex-start"
      >
        <Banner />
        <NavigationBar />
        <OpportunitiesBanner opportunityAvailable={false} />
        <Box flexGrow={1} width="100%">
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};
