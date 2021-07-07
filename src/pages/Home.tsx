import {
  Box,
  Grid,
  useColorMode,
  useColorModeValue,
  Text,
  Heading,
  Image,
  Flex,
  Link,
} from '@chakra-ui/react';
import * as React from 'react';
import { Reacteroids } from '../components/asteroidGame/Reacteroids';
import styled from 'styled-components';
import { HighlightedProjectGrid } from '../components/HighlightedProjectGrid';
import { Contact } from './Contact';

const HeroText = styled.div`
  position: absolute;
  top: 50vh;
  left: 10vh;
  z-index: 50;
  width: 50%;
  /* text-align: left; */
  display: block;
`;

// const Heading = styled.h1`
//   font-size: 5rem;
//   font-weight: 700;
//   line-height: 100px;
// `;

const StyledSpan = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 100px;
  margin-left: 25px;
`;

const Info = styled.div`
  background-color: orange;
  position: absolute;
  top: 80vh;
  right: 5vh;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  color: black;
  padding: 5px 15px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.25);
`;

const People = styled.div`
  grid-column: span 2;
  font-size: 20px;
`;

const PeopleSpan = styled.span`
  display: block;
  font-size: 16px;
  color: #555555;
`;

const Paragraph = styled.p`
  display: block;
  font-size: 20px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const StyledLink = styled.a`
  color: #567dbd;
`;

export const Home: React.VFC = () => {
  const { toggleColorMode } = useColorMode();

  const canvasBG = useColorModeValue('white', 'black');
  const itemColor = useColorModeValue('#000000', '#ffffff');
  const color = useColorModeValue('white', 'black');

  console.log('colorMode:,' + color);

  return (
    <Box bg={useColorModeValue('white', 'black')} width="100%">
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
      <Box>
        <Reacteroids
          bgColor={canvasBG}
          itemColor={itemColor}
          colorMode={color}
        ></Reacteroids>
      </Box>

      <Info>
        <b>INSTRUCTIONS</b>
        <p>
          Use [&larr;][&uarr;][&rarr;] to MOVE <br /> Use SPACEBAR to shoot{' '}
        </p>
      </Info>
      <Box margin="0 auto" marginTop="70px" maxWidth="80%">
        <Grid
          templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
          gridGap="23px"
          gridColumnEnd="-1"
        >
          <Box gridColumn="1 / 6" mb="2vw">
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
          </Box>

          <Box gridColumn="1 / 3">
            <Heading textStyle="h2" mt="50px">
              Projects
            </Heading>
            <Text textStyle="paragraph">
              Ongoing projects focus on a wide range of topics and technologies,
              from developing and deploying novel cybersecurity applications, to
              prototyping and deploying smart-city services and platforms.
            </Text>
            <Text textStyle="paragraph">
              SAIL is committed to promoting innovation, best practices, and
              open source models within the research community. SAIL will learn
              and help teach new technologies and techniques as determined by
              the needs of any given project.
            </Text>
          </Box>

          <HighlightedProjectGrid />
          <Box gridColumn="1 / -1" marginBottom="2em" fontSize="20px">
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
          <Heading gridColumn="1 / -1" mb="2em">
            Opportunities
          </Heading>
          <Box gridColumn="1 / span 4">
            <Image src="../../img/offices.png" />
          </Box>
          <Box
            gridColumn="5 / -1"
            fontSize="20px"
            // gridColumnStart={['1', '1', 'auto']}
          >
            <Text textStyle="paragraph">
              SAIL is seeking full-time professional software engineers. See{' '}
              <StyledLink href="//sail.bu.edu/join">
                current opportunities
              </StyledLink>{' '}
              to apply for a full-time position.
            </Text>
            <ol>
              <li>
                <StyledLink href="https://sail.bu.edu/join/#full-stack">
                  Software Engineer, Full-Stack
                </StyledLink>
              </li>
              <li>
                <StyledLink href="https://sail.bu.edu/join/#cybersecurity">
                  Software Engineer, Cybersecurity
                </StyledLink>
              </li>
            </ol>
            <Text textStyle="paragraph">
              SAIL offers paid internship opportunities for undergraduate and
              graduate students interested in gaining experience working in a
              professional software development environment situated in a
              research university context. To apply for the Summer 2020
              Internship Program, please submit a resume and cover letter to{' '}
              <StyledLink href="mailto:hicsail@bu.edu">
                hicsail@bu.edu
              </StyledLink>
              .
            </Text>
            <Text textStyle="paragraph">
              For all other opportunities, events, and updates, please join our{' '}
              <StyledLink href="https://tinyurl.com/SAIL-mailing-list">
                mailing list
              </StyledLink>{' '}
              to be notified.
            </Text>
          </Box>

          <Heading gridColumn="1 / -1" mb="7px">
            Team
          </Heading>

          <Box gridColumn={['span 1', 'span 1', 'span 2']} fontSize="20px">
            Vidya Akavoor<PeopleSpan>Software Engineer</PeopleSpan>
          </Box>

          <Box gridColumn={['span 1', 'span 1', 'span 2']} fontSize="20px">
            Shirene Cao<PeopleSpan>Software Engineer</PeopleSpan>
          </Box>

          <Box gridColumn={['span 1', 'span 1', 'span 2']} fontSize="20px">
            Dany Fu<PeopleSpan>Software Engineer</PeopleSpan>
          </Box>
          <Box gridColumn={['span 1', 'span 1', 'span 2']} fontSize="20px">
            Arezoo Sadeghi<PeopleSpan>Software Engineer</PeopleSpan>
          </Box>
          <Box gridColumn={['span 1', 'span 1', 'span 2']} fontSize="20px">
            Jeff Simeon<PeopleSpan>Assistant Director, Operations</PeopleSpan>
          </Box>

          <Heading gridColumn="1 / -1" mb="7px">
            Contact Us
          </Heading>
          <Box width="100%" gridColumn="1 / -1">
            <Text textStyle="paragraph">
              Feel free to contact us at{' '}
              <StyledLink href="mailto:hicsail@bu.edu">
                hicsail@bu.edu
              </StyledLink>
              .
            </Text>
          </Box>
          {/* {/* <div id="pattern_footer"></div> */}
        </Grid>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};
