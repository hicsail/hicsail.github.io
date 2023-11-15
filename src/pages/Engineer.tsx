import {
  Box,
  Text,
  Grid,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import data from '../utils/data/data.json';

export const Engineer: React.FC = () => {
  const info = data['engineerPage'];
  return (
    <Layout title="Join Our Team">
      <Box
        borderTop={useColorModeValue('2px solid black', '2px solid white')}
        mb="1rem"
      >
        <Text textAlign="left" textStyle="paragraph" marginBottom="50px">
          There are currently no openings for full-time staff. Please feel free
          to visit{' '}
          <Text as="span" textStyle="link">
            <Link href="https://www.bu.edu/hr/careers/">
              Boston University Careers
            </Link>
          </Text>{' '}
          for additional opportunities.
        </Text>
        <Grid
          mt="1rem"
          templateColumns={'repeat(12, 1fr)'}
          alignItems="baseline"
          gridTemplateAreas={{
            base: `
          'join join join join join join join join join join join join'
          'teamImage teamImage teamImage teamImage teamImage teamImage teamImage teamImage teamImage teamImage teamImage teamImage'
          'opportunities opportunities opportunities opportunities opportunities opportunities opportunities opportunities opportunities opportunities opportunities opportunities'
          'officeImage officeImage officeImage officeImage officeImage officeImage officeImage officeImage officeImage officeImage officeImage officeImage'
          'testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials'`,
            md: `
        'join join join join join ... teamImage teamImage teamImage teamImage teamImage teamImage'
        'officeImage officeImage officeImage officeImage officeImage ... opportunities opportunities opportunities opportunities opportunities opportunities'
        'testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials'
        `,
          }}
        >
          <Box gridArea="join">
            <Text textStyle="paragraph" mt="0">
              {info[0]}
            </Text>
          </Box>
          <Box gridArea="opportunities" marginBottom="20px">
            <Image width="auto !important" src={info[2]} />
          </Box>
          <Box gridArea="officeImage" marginBottom="20px">
            <Image width="auto !important" src={info[3]} />
          </Box>
          <Box gridArea="teamImage">
            <Box marginTop="20px" marginBottom="0px">
              <Text textStyle="paragraph">{info[1]}</Text>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};
