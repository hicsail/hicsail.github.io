import {
  Box,
  Grid,
  useColorMode,
  useColorModeValue,
  Text,
  Heading,
} from '@chakra-ui/react';
import * as React from 'react';
import { Reacteroids } from '../components/asteroidGame/Reacteroids';
import styled from 'styled-components';

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
`;

export const Home: React.VFC = () => {
  const { toggleColorMode } = useColorMode();

  const canvasBG = useColorModeValue('#ffffff', '#000000');
  const itemColor = useColorModeValue('#000000', '#ffffff');

  return (
    <Box bg={useColorModeValue('white', 'black')} width="100%">
      <HeroText>
        <Heading
          fontSize={['50px', '60px', '100px', '100px']}
          fontWeight="700"
          lineHeight="100px"
        >
          {' '}
          SAIL the Software Innovation Lab
        </Heading>
        <Heading
          fontSize={['20px', '30px', '50px', '50px']}
          fontWeight="700"
          lineHeight="100px"
        >
          {' '}
          Where Academia Meets Application
        </Heading>
      </HeroText>
      <Box
      // width="100%"
      >
        <Reacteroids bgColor={canvasBG} itemColor={itemColor}></Reacteroids>
      </Box>
      <Info>
        <b>INSTRUCTIONS</b>
        <p>
          Use [&larr;][&uarr;][&rarr;] to MOVE <br /> Use SPACEBAR to shoot{' '}
        </p>
      </Info>
      <Box
        // maxWidth="80vw"
        margin="0 auto"
        padding="0 30px 0 30px"
      >
        <Grid
          templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
          gridGap="23px"
        >
          <Box gridColumn="1 / 6" mb="2vw">
            <Text fontSize="1.5rem" fontWeight={700} mt="50px">
              About
            </Text>
            <p>
              The <b>Software &amp; Application Innovation Lab</b> (SAIL) at the{' '}
              <a href="https://www.bu.edu/hic/">
                Hariri Institute for Computing
              </a>{' '}
              is a professional research, software engineering, and consulting
              lab that acts as both a driver and a collaborative partner for
              computational and data-oriented research efforts across{' '}
              <a href="https://www.bu.edu">Boston University</a>.
            </p>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
