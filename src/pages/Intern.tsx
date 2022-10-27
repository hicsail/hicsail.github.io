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
  <Layout title="Join Our Team">
    <Box width="50%">
      <Link href="https://forms.clickup.com/14225407/f/dj3zz-4800/IHJZ83PECPURVQH6H2">
        Apply Here
      </Link>
      {/* <div dangerouslySetInnerHTML={{ __html: form }} /> */}
    </Box>
    <InternTestimonials />
    <AlumniGrid />
  </Layout>
);
