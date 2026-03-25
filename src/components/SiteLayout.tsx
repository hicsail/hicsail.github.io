import { Box, Flex } from '@chakra-ui/react';
import { Banner } from './Banner';
import NavigationBar from './NavigationBar/NavigationBar';
import { OpportunitiesBanner } from './OpportunitiesBanner';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from './Footer';
import * as React from 'react';

const ScrollToHash: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = location.hash.replace('#', '');
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.key]); // location.key changes on every navigation, even to the same URL

  return null;
};

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
        <ScrollToHash />
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
