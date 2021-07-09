import { Box, useColorModeValue, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Join } from './pages/Join';
import { Contact } from './pages/Contact';
import { Alumni } from './pages/Alumni';
import { CurrentMembers } from './pages/CurrentMembers';
import { OngoingResearch } from './pages/OngoingResearch';
import { PastResearch } from './pages/PastResearch';
import { Presentations } from './pages/Presentations';
import Footer from './components/Footer';

export const App: React.VFC = () => {
  return (
    <Box bg={useColorModeValue('white', 'black')} width="100%">
      <Flex
        direction="column"
        align="center"
        margin="0 auto"
        width="100%"
        maxWidth="80%"
      >
        <NavigationBar></NavigationBar>
        {/* <NewNavigationBar></NewNavigationBar> */}

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
          <Route path="/presentations">
            <Presentations />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Flex>
    </Box>
  );
};
