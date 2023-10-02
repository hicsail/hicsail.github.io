import { Box, Heading, Link, Text } from '@chakra-ui/react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import * as React from 'react';

export const Contact: React.FC = () => {
  return (
    <Box margin="30px">
      <Box pr={{ md: '8' }} width={{ base: '100%', md: '90%', xl: '80%' }}>
        <Text textStyle="paragraph">
          Feel free to contact us at
          <Link color="#567dbd" href="mailto:sail@bu.edu">
            {' '}
            sail@bu.edu
          </Link>
        </Text>
        <ContactForm />
      </Box>
      <Box pl={{ md: '8' }} width={{ base: '100%', md: '50%', xl: '50%' }}>
        <Heading mt={{ base: '10px' }} mb={{ base: '10px', md: '20px' }}>
          Find Us On The 12th Floor
        </Heading>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.6525773820244!2d-71.10470968454395!3d42.349929979187564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798427004e47%3A0x68dc63d6f0dd3337!2sBU%20Faculty%20of%20Computing%20%26%20Data%20Sciences!5e0!3m2!1sen!2sus!4v1667572742574!5m2!1sen!2sus"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};
