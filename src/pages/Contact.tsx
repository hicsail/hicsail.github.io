import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.VFC = () => {
  return (
    <Box>
      <Flex flexDirection="column">
        <Heading mb="20px">Find Us</Heading>
        <Flex flexDirection="column" mb="20px">
          {/* <Text>Division of Computing</Text>
          <Text>Department of Computer Science, Boston University</Text>
          <Text>111 Cummington Mall</Text>
          <Text>Boston, MA 02215</Text> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.691695530588!2d-71.10623141476769!3d42.349096081881804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f0c4ef07c1%3A0xae092ed802b7f90a!2s111%20Cummington%20Mall%2C%20Boston%2C%20MA%2002215!5e0!3m2!1sen!2sus!4v1622823890446!5m2!1sen!2sus"
            width="600"
            height="450"
          ></iframe>
          <Box width="50%">
            <ContactForm />
          </Box>
        </Flex>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.691695530588!2d-71.10623141476769!3d42.349096081881804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f0c4ef07c1%3A0xae092ed802b7f90a!2s111%20Cummington%20Mall%2C%20Boston%2C%20MA%2002215!5e0!3m2!1sen!2sus!4v1622823890446!5m2!1sen!2sus"
          width="600"
          height="450"
        ></iframe> */}
      </Flex>
      {/* <Box width="50%">
        <ContactForm />
      </Box> */}
    </Box>
  );
};
