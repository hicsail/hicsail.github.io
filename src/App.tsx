import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { BrowserRouter, Route } from 'react-router-dom';
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
                <BrowserRouter>
                    <Route path="/" element={<Home />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/presentations" element={<Presentations />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/technicalstaff" element={<Engineer />} />
                    <Route path="/interns" element={<Intern />} />
                    <Route path="/contact" element={<Contact />} />
                </BrowserRouter>
                <Footer /> {/* Footer component */}
            </Flex>
        </Box>
    );
};
