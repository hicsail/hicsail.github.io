import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Fade } from 'react-awesome-reveal';

export const Contact: React.FC = () => {
  return (
    <Box
      margin="30px"
      sx={{ fontFamily: 'Segoe UI, Helvetica Neue, sans-serif' }}
    >
      <Box width="100%">
        <Heading
          sx={{
            fontFamily: 'Segoe UI, Helvetica Neue, sans-serif',
            fontSize: '30px',
          }}
        >
          Contact Us
        </Heading>
        <Text textStyle="paragraph">
          Feel free to contact us at
          <Link color="#567dbd" href="mailto:sail@bu.edu">
            {' '}
            sail@bu.edu
          </Link>
          , or find us on the 12th floor of the CDS building.
        </Text>
      </Box>
      <Box marginTop="30px">
        <Fade delay={300} duration={1500} cascade damping={0.3} fraction={0.15}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6525773820244!2d-71.10470968454395!3d42.349929979187564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798427004e47%3A0x68dc63d6f0dd3337!2sBU%20Faculty%20of%20Computing%20%26%20Data%20Sciences!5e0!3m2!1sen!2sus!4v1667572742574!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </Fade>
      </Box>
    </Box>
  );
};
