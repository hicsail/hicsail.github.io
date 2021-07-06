import { Box, useColorModeValue, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Join } from './pages/Join';
import { Contact } from './pages/Contact';
import { Alumni } from './pages/Alumni';
import { CurrentMembers } from './pages/CurrentMembers';
import { OngoingResearch } from './pages/OngoingResearch';
import { PastResearch } from './pages/PastResearch';
import { Presentations } from './pages/Presentations';
import { Research } from './pages/Research';

import Footer from './components/Footer';
import { OpportunitiesBanner } from './components/OpportunitiesBanner';

export const App: React.VFC = () => {
  return (
    <Box bg={useColorModeValue('white', '#121212')} width="100%" height="100%">
      <Flex
        direction="column"
        align="center"
        margin="0"
        // margin="0 auto"
        width="100%"
        height="100%"
        minHeight="100vh"
        justifyContent="flex-start"
      >
        <NavigationBar />

        <OpportunitiesBanner opportunityAvailable={false} />

        <Box
          flexGrow={1}

          // width="100%"
          // marginLeft="20px"
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/currentmembers">
              <CurrentMembers />
            </Route>
            <Route path="/alumni">
              <Alumni />
            </Route>
            <Route path="/ongoingresearch">
              <OngoingResearch />
            </Route>
            <Route path="/pastresearch">
              <PastResearch />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/presentations">
              <Presentations />
            </Route>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
          </Switch>
        </Box>

        <Flex display="column" alignItems="flex-end">
          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
};
