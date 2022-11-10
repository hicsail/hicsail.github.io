import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  useColorModeValue,
  Link,
  Button,
  Flex,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { InternTestimonials } from '../components/InternTestimonials';
import { AlumniGrid } from '../components/AlumniGrid';
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

export const Intern: React.VFC = () => (
  <Layout title="Software Engineer Internships">
    <Flex
      borderBottom="2px solid black"
      pb="16px"
      pt="16px"
      gap="24px"
      // justifyContent="space-between"
    >
      <Box>
        <Button color="#73A6FC">
          <Link
            href="https://forms.clickup.com/14225407/f/dj3zz-4800/IHJZ83PECPURVQH6H2"
            isExternal
          >
            Apply Here
          </Link>
        </Button>
      </Box>
      <Box width="60%">
        <Text>
          The Software & Application Innovation Lab (SAIL) at the Hariri
          Institute for Computing is a professional research, software
          engineering, and consulting lab that acts as both a driver and a
          collaborative partner for computational and data-oriented research
          efforts across Boston University. Interns at the lab have the
          opportunity to gain experience working with a team of research
          software engineers, applying modern software development techniques
          while following industry best practices. They are not deterred by
          ambiguity and have a strong desire to explore alternatives and
          identify solutions. Interns gain expertise in critical and analytical
          work, design thinking, and cutting-edge technologies--all while
          collaborating with faculty, graduate students, and industry partners
          on research efforts in domains such as digital health, security and
          privacy, data science, and synthetic biology.
        </Text>
      </Box>

      {/* <div dangerouslySetInnerHTML={{ __html: form }} /> */}
    </Flex>
    <Box borderBottom="2px solid black" pb="16px" pt="16px">
      <Heading>SAIL Intern Testimonials</Heading>
      <InternTestimonials />
    </Box>
    <Box borderBottom="2px solid black" pb="16px">
      <Heading>SAIL Intern Alumni</Heading>
      <Image src="../../img/wordcloud.jpg" width="60%" />
      {/* <AlumniGrid /> */}
    </Box>
  </Layout>
);
