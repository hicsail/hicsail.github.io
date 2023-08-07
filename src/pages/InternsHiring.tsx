import * as React from 'react';
import { useEffect } from 'react';
import { Layout } from '../components/Layout';
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import Counter from '../utils/scripts/counter.js';
import {
  frequencyGraph,
  frequencyGraphHorizontal,
  pieChart,
  groupedFrequencyGraph,
  drawMap,
} from '../utils/scripts/graphs.js';

export const InternsHiring: React.FC = () => {
  const [internData, setinternData] = React.useState([]);

  const getinternsHiringData = async () => {
    if (!sessionStorage.getItem('internsHiring')) {
      const resp = await fetch(`http://localhost:3000/api/getList/interns`, {
        method: 'GET',
      });
      const data = await resp.json();
      console.log('data', data);
      setinternData(data);
      sessionStorage.setItem('internsHiring', JSON.stringify(data));
    } else {
      console.log('already have internsHiring');
    }
  };

  const renderVisualization = () => {
    const data = JSON.parse(sessionStorage.getItem('internsHiring') || '[]');

    const colleges = data.map((d: any) => d['College']);
    // no null values
    const collegesFiltered = colleges.filter(
      (college: string) => college != '' && college != null,
    );

    const hearAbout = data.map((d: any) => d['How did you hear about us?']);
    const hearAboutFiltered = hearAbout.filter(
      (source: string) => source != '' && source != null,
    );

    const hearAboutSources = Counter(hearAboutFiltered);

    const majors = data.map((d: any) => d['What is your major?']);
    const majorsFiltered = majors.filter(
      (major: string) => major != '' && major != null,
    );
    console.log('majors', majorsFiltered);

    frequencyGraph('colleges', collegesFiltered, 'Y', true, 'purple');
    frequencyGraph('majors', majorsFiltered, 'Y', true, 'yellow', 500, 600);
    pieChart('hearAbout', hearAboutSources);
  };

  useEffect(() => {
    getinternsHiringData();

    if (sessionStorage.getItem('internsHiring')) {
      renderVisualization();
    }
  });

  return (
    <div className="container">
      {internData.length > 0 || sessionStorage.getItem('internsHiring') ? (
        <Flex
          direction="row"
          justify="space-evenly"
          alignItems="center"
          flexWrap="wrap"
        >
          <Flex
            className="col"
            direction="column"
            justify="space-evenly"
            alignItems="center"
            flexWrap="wrap"
          >
            <Text fontSize="2xl" textAlign="center">
              Colleges
            </Text>
            <div id="colleges"></div>
          </Flex>

          <Flex
            className="col"
            direction="column"
            justify="space-evenly"
            alignItems="center"
            flexWrap="wrap"
          >
            <Text fontSize="2xl" textAlign="center">
              Intern Applicants Heard About Us From
            </Text>
            <div id="hearAbout"></div>
          </Flex>

          <Flex
            className="col"
            direction="column"
            justify="space-evenly"
            alignItems="center"
            flexWrap="wrap"
          >
            <Text fontSize="2xl" textAlign="center">
              Majors
            </Text>
            <div id="majors"></div>
          </Flex>
        </Flex>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
