import { Box, Flex, Link, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { Banner } from './components/Banner';
import { OpportunitiesBanner } from './components/OpportunitiesBanner';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Projects } from './pages/Projects';
import { Join } from './pages/Join';
import { Research } from './pages/Research';
import { Alumni } from './pages/Alumni';
import { CurrentMembers } from './pages/CurrentMembers';
import { People } from './pages/People';
import { Presentations } from './pages/Presentations';
import Footer from './components/Footer';
import { Contact } from './pages/Contact';

export const App: React.VFC = () => {
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
        {/* <Flex direction="row" alignItems="center" bg="red" width="100%">
          <Box
            boxSize="45px"
            objectFit="cover"
            marginRight="10px"
            marginBottom="5px"
          >
            <Link href="https://www.bu.edu/hic/">
              <Image src="../../img/bu-logo.png" />
            </Link>
          </Box>
          <Box>
            {' '}
            <Link
              href="https://www.bu.edu/hic/"
              _hover={{ textDecoration: 'none' }}
            >
              <Text
                fontSize={'1.25rem'}
                fontFamily="Karbon"
                fontWeight={500}
                maxWidth="500px"
              >
                Rafik B. Hariri Institute for Computing and Computational
                Science & Engineering
              </Text>
            </Link>
          </Box>
        </Flex> */}
        <NavigationBar />

        <OpportunitiesBanner opportunityAvailable={false} />

        <Box flexGrow={1} width="100%">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/currentmembers">
              <CurrentMembers />
            </Route>
            <Route path="/alumni">
              <Alumni />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/projects">
              <Projects />
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
        </Box>

        <Footer />
      </Flex>
    </Box>
  );
};
