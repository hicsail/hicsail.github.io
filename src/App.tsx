import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Projects } from './pages/Projects';
import { Alumni } from './pages/Alumni';
import { People } from './pages/People';
import { Presentations } from './pages/Presentations';
import Footer from './components/Footer';
import { Banner } from './components/Banner';
import NavigationBar from './components/NavigationBar';
import { OpportunitiesBanner } from './components/OpportunitiesBanner';
import { Contact } from './pages/Contact';
import { Engineer } from './pages/Engineer';
import { Intern } from './pages/Intern';

export const App: React.FC = () => {
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
                <Banner /> {/* Banner component */}
                <NavigationBar /> {/* NavigationBar component */}
                <OpportunitiesBanner opportunityAvailable={false} />{' '}
                {/* OpportunitiesBanner component */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/people">
                        <People />
                    </Route>
                    <Route path="/alumni">
                        <Alumni />
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
                    <Route path="/technicalstaff">
                        <Engineer />
                    </Route>
                    <Route path="/interns">
                        <Intern />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                <Footer /> {/* Footer component */}
            </Flex>
        </Box>
    );
};
