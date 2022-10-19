import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { InternTestimonials } from '../components/InternTestimonials';

const form = `
<iframe
class="clickup-embed clickup-dynamic-height"
src="https://forms.clickup.com/14225407/f/dj3zz-4800/IHJZ83PECPURVQH6H2"
onwheel=""
width="100%"
height="1000px"
style="background: transparent; border: 1px solid #ccc;"
></iframe>
<script
async
src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
></script>
`;

export const Join: React.VFC = () => (
  <Layout title="Join Our Team">
    <Box>Software Engineer</Box>
    <Box>Interns</Box>

    {/* <Box mb="1rem">
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
        'join join join join join ... ... teamImage teamImage teamImage teamImage teamImage'
        'officeImage officeImage officeImage officeImage officeImage ... ... opportunities opportunities opportunities opportunities opportunities'
        'testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials testimonials'
        `,
        }}
        // borderTop={useColorModeValue('2px solid black', '2px solid white')}
      >
        <Box gridArea="join">
          <Text textStyle="paragraph" mt="0">
            Software engineers at the Software & Application Innovation Lab
            (SAIL) contribute to a variety of cutting-edge computational and
            data-driven research efforts while developing their skills in the
            latest technologies within a professional software engineering
            environment. The projects undertaken by SAIL software engineers have
            tangible and direct impacts on academic research, public service,
            and industry partners in healthcare, finance, and technology.
          </Text>
        </Box>
        <Box gridArea="teamImage">
          <Image src="../../img/offices.png" />
        </Box>
        <Box gridArea="officeImage">
          <Image src="../../img/team/team.jpg" />
        </Box>
        <Box gridArea="opportunities">
          <Box marginTop="20px" marginBottom="20px">
            <Heading>Active Opportunities</Heading>
            <br />
            <Box height="100%">
              <div dangerouslySetInnerHTML={{ __html: form }}></div>
            </Box>
          </Box>
        </Box>
        <Box gridArea="testimonials" mt="20px">
          <Heading pb="1rem">Past Intern Testimonials</Heading>
          <Box>
            <InternTestimonials />
          </Box>
        </Box>
      </Grid>
    </Box> */}
  </Layout>
);
