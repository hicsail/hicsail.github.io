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
  </Layout>
);
