import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';

export const Engineer: React.VFC = () => (
  <Layout title="Join Our Team">
    <Box
      borderTop={useColorModeValue('2px solid black', '2px solid white')}
      mb="1rem"
    >
      <Text textAlign="center" textStyle="paragraph" mb="10px">
        There are currently no openings for full-time staff. Please feel free to
        visit{' '}
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
            SAIL is a team of professionally staffed software engineers,
            product, and project managers under one roof. SAIL software
            engineers contribute to a variety of research efforts while
            developing their skills in the latest technologies within a
            professional software engineering environment. SAIL technical
            project/product managers operate alongside software engineering
            teams, working in agile development environment, to manage the
            workflow of all funded projects for our clients and collaborators.
            The projects undertaken by SAIL software engineers and
            project/product managers have tangible and direct impacts on
            academic industry partners, public service and research in the
            fields of education, healthcare, finance, social justice, technology
            and more.
          </Text>
        </Box>
        <Box gridArea="teamImage">
          <Image src="../../img/data-science-building.jpeg" />
        </Box>
        <Box gridArea="officeImage" marginTop="20px">
          <Image src="../../img/team/team-1.jpeg" />
        </Box>
        <Box gridArea="opportunities">
          <Box marginTop="20px" marginBottom="20px">
            <Text textStyle="paragraph" marginBlockStart="0">
              Every member of our team has the opportunity to contribute towards
              shaping the long-term vision of our research agenda. In addition
              to working alongside other professional staff members with diverse
              backgrounds, members of SAIL collaborate with researchers at
              Boston University, and beyond, who are nationally respected as
              leaders in their corresponding fields. Being a part of Boston
              University also means that our team members can develop new skills
              classically, through access to university classes, or practically,
              by way of our diverse project offerings. As a unit, we take pride
              in tackling unique challenges, in a flexible work environment,
              while promoting the professional and personal growth of our staff.
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  </Layout>
);
