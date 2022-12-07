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
import { AlumniVisualization } from '../components/AlumniVisualization';
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

const data = [
  { year: 1980, efficiency: 24.3, sales: 8949000 },
  { year: 1985, efficiency: 27.6, sales: 10979000 },
  { year: 1990, efficiency: 28, sales: 9303000 },
  { year: 1991, efficiency: 28.4, sales: 8185000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
  { year: 1993, efficiency: 28.4, sales: 8518000 },
  { year: 1994, efficiency: 28.3, sales: 8991000 },
  { year: 1995, efficiency: 28.6, sales: 8620000 },
  { year: 1996, efficiency: 28.5, sales: 8479000 },
  { year: 1997, efficiency: 28.7, sales: 8217000 },
  { year: 1998, efficiency: 28.8, sales: 8085000 },
  { year: 1999, efficiency: 28.3, sales: 8638000 },
  { year: 2000, efficiency: 28.5, sales: 8778000 },
  { year: 2001, efficiency: 28.8, sales: 8352000 },
  { year: 2002, efficiency: 29, sales: 8042000 },
  { year: 2003, efficiency: 29.5, sales: 7556000 },
  { year: 2004, efficiency: 29.5, sales: 7483000 },
  { year: 2005, efficiency: 30.3, sales: 7660000 },
  { year: 2006, efficiency: 30.1, sales: 7762000 },
  { year: 2007, efficiency: 31.2, sales: 7562000 },
  { year: 2008, efficiency: 31.5, sales: 6769000 },
  { year: 2009, efficiency: 32.9, sales: 5402000 },
  { year: 2010, efficiency: 33.9, sales: 5636000 },
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 7586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 6081000 },
];

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
        <Link
          href="https://forms.clickup.com/14225407/f/dj3zz-4800/IHJZ83PECPURVQH6H2"
          isExternal
        >
          <Button color="#73A6FC">Apply Here</Button>
        </Link>
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
      {/* <AlumniVisualization data={data} /> */}
      {/* <Image src="../../img/wordcloud.jpg" width="60%" /> */}
      {/* <AlumniGrid /> */}
    </Box>
  </Layout>
);
