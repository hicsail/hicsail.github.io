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

export const Intern: React.FC = () => (
  <Layout title="Software Engineer Internships">
    <Flex borderBottom="2px solid black" pb="16px" pt="16px" gap="24px">
      <Box display="none">
        <Link
          href="https://forms.clickup.com/14225407/f/dj3zz-4800/IHJZ83PECPURVQH6H2"
          isExternal
        >
          <Button color="#73A6FC">Apply Here</Button>
        </Link>
      </Box>
      <Box>
        <Text>
          <Text textStyle="paragraph" marginBlockStart="0">
            Interns at the Software & Application Innovation Lab (SAIL) have the
            opportunity to gain experience working with a team of research
            software engineers, applying modern software development techniques
            while following industry best practices. They are not deterred by
            ambiguity and have a strong desire to explore alternatives and
            identify solutions.{' '}
          </Text>
          <Text textStyle="paragraph">
            Interns gain expertise in critical and analytical work, design
            thinking, and cutting-edge technologies--all while collaborating
            with faculty, graduate students, and industry partners on research
            efforts in domains such as digital health, security and privacy,
            data science, synthetic biology and more.{' '}
          </Text>
          {/* <Text textStyle="paragraph">
            SAIL offers the opportunity for students at Boston University to
            partake in part-time internships throughout the fall and spring
            semesters. If you are a Boston University student interested in a
            part-time internship, please email your resume and indication of
            your interests to{' '}
            <Text as="span" textStyle="link">
              <Link href="mailto:sail@bu.edu">sail@bu.edu</Link>
            </Text>
          </Text> */}
        </Text>
      </Box>
    </Flex>
    <Box borderBottom="2px solid black" pb="16px" pt="16px">
      <Heading>SAIL Intern Testimonials</Heading>
      <InternTestimonials />
    </Box>
  </Layout>
);
