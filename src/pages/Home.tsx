import {
  Box,
  Grid,
  useDisclosure,
  useColorModeValue,
  Text,
  Heading,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import * as React from 'react';
import { Reacteroids } from '../components/asteroidGame/Reacteroids';
import styled from 'styled-components';
import { HighlightedProjectGrid } from '../components/HighlightedProjectGrid';
import { useEffect } from 'react';

const HeroText = styled.div`
  position: absolute;
  top: 50vh;
  left: 10vh;
  z-index: 50;
  width: 65%;
  /* text-align: left; */
  display: block;
`;

const StyledLink = styled.a`
  color: #567dbd;
`;

export const Home: React.VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const canvasBG = useColorModeValue('white', 'black');
  const itemColor = useColorModeValue('#000000', '#FFFFFF');
  const color = useColorModeValue('white', 'black');

  return (
    <Box width="100%" boxSizing="border-box">
      <Box display={['none', 'initial']}>
        <HeroText>
          <Heading fontSize={['30px', '60px', '80px', '100px']} textStyle="h1">
            {' '}
            Software & Application Innovation Lab
          </Heading>
          <Heading fontSize={['10px', '30px', '50px', '50px']} textStyle="h1">
            {' '}
            Where Academia Meets Application
          </Heading>
        </HeroText>
      </Box>
      <Box display={['none', 'initial']}>
        <Reacteroids
          bgColor={canvasBG}
          itemColor={itemColor}
          colorMode={color}
        />
      </Box>
      <Box margin="0 auto" maxWidth="80%">
        <Grid
          gridTemplateColumns={{
            base: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gridTemplateAreas={{
            base: `
            'heading heading' 
            'about about'
            'projects projects' 
            'projectgrid projectgrid' 
            'contact contact'`,
            md: `
            'heading heading heading' 
            'about about ... '
            'projects projectgrid projectgrid' 
            'contact contact contact'`,
          }}
          gridGap="23px"
          width="100%"
        >
          <Box gridArea="heading" display={['initial', 'none']}>
            <Heading fontSize="2rem">
              {' '}
              Software & Application Innovation Lab
            </Heading>
            <Heading fontSize="1.25rem">
              {' '}
              Where Academia Meets Application
            </Heading>
            <Box justifyContent="center" overflow="hidden">
              <Button onClick={onOpen}>Ready to launch? 🚀</Button>
              <Modal isOpen={isOpen} onClose={onClose} autoFocus size="sm">
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Reacteroids!</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Reacteroids
                      bgColor={canvasBG}
                      itemColor={itemColor}
                      colorMode={color}
                      mobile={true}
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
          <Box gridArea="about" marginBottom="2em">
            <Heading textStyle="h2">About</Heading>
            <Text textStyle="paragraph">
              The Software & Application Innovation Lab (SAIL) at the{' '}
              <Link href="https://www.bu.edu/hic/">
                <Text as="span" textStyle="link">
                  {' '}
                  Hariri Institute for Computing
                </Text>
              </Link>{' '}
              is a professional research, software engineering, and consulting
              lab that acts as both a driver and a collaborative partner for
              computational and data-oriented research efforts across{' '}
              <Link href="https://www.bu.edu">
                <Text as="span" textStyle="link">
                  Boston University
                </Text>
              </Link>
              .
            </Text>
            <Text textStyle="paragraph">
              Across Boston University, the quality and the potential impact of
              research activities (as well as the success of both students and
              researchers) are increasingly dependent on the ability to work
              with data and computational approaches, the development of quality
              software applications and services, and familiarity with software
              development practices.
            </Text>
            <Text textStyle="paragraph">
              SAIL activities include basic and applied research, prototype and
              production-quality software application development,
              consultations, project and budget planning guidance, and other
              forms of support for projects and research efforts funded by the
              Hariri Research Awards, the National Science Foundation, the
              National Institutes of Health, and other agencies. SAIL has worked
              with over 60 collaborators across 12 schools at Boston University;
              several examples are described briefly below.
            </Text>
            <Text textStyle="paragraph">
              If you would like to explore how SAIL can help you achieve your
              research objectives or would like to discuss what resources are
              available, please fill out a{' '}
              <StyledLink href="https://www.bu.edu/hic/forms/sail-request-form/">
                request form
              </StyledLink>{' '}
              or <a href="mailto:hicsail@bu.edu">contact us</a> directly.
            </Text>
            <Text textStyle="paragraph">
              If you are seeking other forms of support (including seed funding)
              for a research effort that requires computational science
              expertise or software engineering resources, you may also want to
              consider the{' '}
              <a href="https://www.bu.edu/hic/programs/hariri-research-awards/">
                Hariri Research Award program
              </a>
              .
            </Text>
          </Box>

          <Box gridArea="projects">
            <Box
              position={{ sm: 'static', lg: 'sticky' }}
              top="20px"
              mb={{ lg: '30%' }}
            >
              <Heading textStyle="h2" mt="5'0px">
                Featured Projects
              </Heading>
              <Text textStyle="paragraph">
                Ongoing projects focus on a wide range of topics and
                technologies, from developing and deploying novel cybersecurity
                applications, to prototyping and deploying smart-city services
                and platforms.
              </Text>
              <Text textStyle="paragraph">
                SAIL is committed to promoting innovation, best practices, and
                open source models within the research community. SAIL will
                learn and help teach new technologies and techniques as
                determined by the needs of any given project.
              </Text>
            </Box>
          </Box>

          <Box gridArea="projectgrid">
            <HighlightedProjectGrid />
          </Box>

          <Box width="100%" gridArea="contact"></Box>
        </Grid>
      </Box>
    </Box>
  );
};
