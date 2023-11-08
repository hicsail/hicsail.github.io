import {
  Box,
  Grid,
  useDisclosure,
  useColorModeValue,
  Text,
  Heading,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  IconButton,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { isBrowser, isMobile } from 'react-device-detect';
import * as React from 'react';
import { Reacteroids } from '../components/asteroidGame/Reacteroids';
import styled from 'styled-components';
import { IoRocketSharp } from 'react-icons/io5';
import { ProjectsGrid } from '../components/ProjectsGrid/ProjectsGrid';
import { AboutBlurb } from '../components/AboutBlurb/AboutBlurb';
import data from '../utils/data/data.json';

const HeroText = styled.div`
  position: absolute;
  top: 50vh;
  left: 10vh;
  z-index: 50;
  width: 65%;
  /* text-align: left; */
  display: block;
`;

const PlayButton = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 1;
`;

export const Home: React.FC = () => {
  const projects = data['projects'];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const canvasBG = useColorModeValue('white', 'black');
  const itemColor = useColorModeValue('#000000', '#FFFFFF');
  const color = useColorModeValue('white', 'black');

  function isDarkModeEnabled() {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  return (
    <Box width="100%" boxSizing="border-box">
      {isMobile && (
        <PlayButton>
          <IconButton
            size="lg"
            isRound
            style={{
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignContent: 'center',
              display: 'flex',
            }}
            fontSize="20px"
            aria-label="Launch Game"
            icon={<IoRocketSharp />}
            display={['initial', 'none']}
            onClick={onOpen}
          />
        </PlayButton>
      )}
      {isBrowser && (
        <Box display={['none', 'initial']}>
          <HeroText>
            <Heading
              fontSize={['30px', '60px', '80px', '100px']}
              textStyle="h1"
            >
              {' '}
              Software & Application Innovation Lab
            </Heading>
            <Heading fontSize={['10px', '30px', '50px', '50px']} textStyle="h1">
              {' '}
              Where Academia Meets Application
            </Heading>
          </HeroText>
        </Box>
      )}
      {isBrowser && (
        <Box display={['none', 'initial']}>
          <Reacteroids
            bgColor={canvasBG}
            itemColor={itemColor}
            colorMode={color}
          />
        </Box>
      )}
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
            'about about about '
            'projectgrid projectgrid projectgrid' 
            'contact contact contact'`,
          }}
          gridGap="23px"
          width="100%"
        >
          {isMobile && (
            <Box gridArea="heading">
              <Heading fontSize="3rem" mt={8}>
                {' '}
                Software & Application Innovation Lab
              </Heading>
              <Heading fontSize="1.5rem">
                {' '}
                Where Academia Meets Application
              </Heading>
              <Box justifyContent="center" overflow="hidden">
                <Modal
                  colorScheme="blackAlpha"
                  isOpen={isOpen}
                  onClose={onClose}
                  isCentered
                  autoFocus
                  size="full"
                >
                  <ModalOverlay />
                  <ModalContent bg={useColorModeValue('#FFFFFF', 'black')}>
                    <ModalHeader paddingBottom="0">Reacteroids!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody ml={0} mr={0}>
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
          )}
          <Box gridArea="about">
            <Heading textStyle="h2" mt="2rem" id="about">
              About
            </Heading>
            <Text textStyle="paragraph">
              The Software & Application Innovation Lab (SAIL) is the premier
              professional research, software engineering, and consulting lab
              within the
              <Link href="https://www.bu.edu/hic/">
                <Text as="span" textStyle="link">
                  {' '}
                  Hariri Institute for Computing
                </Text>
              </Link>{' '}
              at Boston University. SAIL acts as both a driver and a
              collaborative partner in the creation of cutting-edge solutions
              for the data-driven, computational, and software engineering
              aspects of research across the university and beyond.
            </Text>
            <Text textStyle="paragraph">
              As the desire for professional quality software applications and
              services continues to rise within the realm of academia, SAIL
              exists to develop production quality applications and services by
              leveraging industry-leading software development practices.
            </Text>
            <Text textStyle="paragraph">
              If you would like to explore how SAIL can help you achieve your
              research objectives or would like to discuss what resources are
              available, please fill out a{' '}
              <Link href="https://www.bu.edu/hic/forms/sail-request-form/">
                <Text as="span" textStyle="link">
                  request form
                </Text>
              </Link>
              {' or '}
              <Link href="mailto:sail@bu.edu">
                <Text as="span" textStyle="link">
                  contact us
                </Text>
              </Link>
              {' directly'}
            </Text>
            <AboutBlurb />
          </Box>
          <Box gridArea="projectgrid">
            <Heading textStyle="h2" mt="5'0px">
              Featured Projects
            </Heading>
            <ProjectsGrid
              title=""
              list={projects}
              showSelect={false}
              showText={false}
            />
          </Box>
          <Box width="100%" gridArea="contact"></Box>
        </Grid>
      </Box>
    </Box>
  );
};
