import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';

export const Join: React.VFC = () => (
  <Layout title="Join Our Team">
    <Text>
      Software engineers at the Software & Application Innovation Lab (SAIL)
      contribute to a variety of cutting-edge computational and data-driven
      research efforts while developing their skills in the latest technologies
      within a professional software engineering environment. The projects
      undertaken by SAIL software engineers have tangible and direct impacts on
      academic research, public service, and industry partners in healthcare,
      finance, and technology.
    </Text>
    <Box marginTop="20px" marginBottom="20px">
      <Heading>Active Opportunities</Heading>
      <Text as="u">
        There are no current positions open at SAIL. Check back later!{' '}
      </Text>
      <Text>
        All team members at SAIL are engaged in identifying efforts and shaping
        the long-term vision of our research agenda. In addition to working with
        other professional software engineers, you have the opportunity to
        collaborate with researchers at Boston University and beyond who are
        nationally respected as leaders in their corresponding areas of
        research. Additionally, you can develop new skills in almost every
        project, tackle diverse challenges in a flexible work environment, and
        mentor software engineer interns.
      </Text>
      <Text>
        SAIL is housed within the Hariri Institute for Computing, which
        catalyzes, enables, and supports interdisciplinary research efforts
        across Boston University. Our team consists of ten full-time staff
        members and 10-15 interns each semester.
      </Text>
    </Box>
    <Divider />
    <Box marginTop="20px">
      <Heading>Past Intern Testimonials</Heading>
    </Box>
  </Layout>
);
