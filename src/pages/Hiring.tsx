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

export const Hiring: React.FC = () => {
  const [hiring, setHiring] = React.useState([]);

  const getHiringData = async () => {
    if (!sessionStorage.getItem('hiring')) {
      const resp = await fetch(`http://localhost:3000/api/getList/hiring`, {
        method: 'GET',
      });
      const data = await resp.json();
      console.log('data', data);
      setHiring(data);
      sessionStorage.setItem('hiring', JSON.stringify(data));
    } else {
      console.log('already have hiring');
    }
  };

  const renderVisualization = () => {
    const data = JSON.parse(sessionStorage.getItem('hiring') || '[]');

    // get list of applicant dates and filter out null values
    const applicantList = data.map((d: any) => d['Application Date']);
    const applicants = applicantList.filter(
      (applicant: string) => applicant != '' && applicant != null,
    );

    // get number of applicants in 2022 using the "Application Date" field
    const applicants22 = applicants.filter((d: any) => d.includes('2022'));
    const numApplicants = applicants22.length;
    document.getElementById('numApplicants')!.innerHTML =
      numApplicants.toString();

    // get education levels and filter out null values
    const educationList = data.map((d: any) => d['Highest Education Level']);
    const educationLevels = educationList.filter(
      (education: string) => education != '' && education != null,
    );
    // counter number of each level of education
    const education = Counter(educationLevels);

    //get work authorization status and filter out null values
    const workAuthList = data.map((d: any) => d['Work Authorization Status']);
    const workAuthStatus = workAuthList.filter(
      (workAuth: string) =>
        workAuth != '' && workAuth != null && workAuth != 'US Citizen',
    );
    //show number
    document.getElementById('workAuth')!.innerHTML =
      workAuthStatus.length.toString();

    // get gender info and filter out null values
    const genders = data.map((d: any) => d['Gender']);
    const gendersCount = genders.filter((g: string) => g != '' && g != null);
    console.log('genders', gendersCount);

    // get location info
    const locations = data
      .map((d: any) => d['location'])
      .filter((location: any) => location != '' && location != null);
    const locationsProcessed = locations.map((locationObject: any) => {
      if ('location' in locationObject) {
        return {
          lat: locationObject['location'].lat,
          long: locationObject['location'].lng,
          City: locationObject.formatted_address,
        };
      } else {
        return null;
      }
    });
    console.log('locations', locationsProcessed);

    frequencyGraph('genders', gendersCount, 'Y', true, 'pink');
    pieChart('education', education);
    drawMap(locationsProcessed);
  };

  useEffect(() => {
    getHiringData();

    if (sessionStorage.getItem('hiring')) {
      renderVisualization();
    }
  });

  return (
    <Layout title="Hiring">
      <Box
        borderTop={useColorModeValue('2px solid black', '2px solid white')}
        mb="1rem"
      ></Box>
      <div className="container">
        {hiring.length > 0 || sessionStorage.getItem('hiring') ? (
          <Flex
            direction="row"
            justify="space-evenly"
            alignItems="center"
            flexWrap="wrap"
          >
            <div>
              <Text fontSize="2xl">Number of Applicants in 2022 </Text>
              <Text id="numApplicants" fontSize="xl"></Text>
            </div>
            <div>
              <Text fontSize="2xl" textAlign="center">
                STEM OPT or H1B Applicants
              </Text>
              <Text id="workAuth" fontSize="xl"></Text>
            </div>
            <div id="genders">
              <Text fontSize="2xl" textAlign="center">
                Gender
              </Text>
            </div>
            <div id="education">
              <Text fontSize="2xl" textAlign="center">
                Education Levels
              </Text>
            </div>
            <div id="locations">
              <Text fontSize="2xl" textAlign="center">
                Applicant Locations
              </Text>
            </div>
          </Flex>
        ) : (
          <h1>Not Loading</h1>
        )}
      </div>
    </Layout>
  );
};
