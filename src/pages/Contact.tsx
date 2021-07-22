import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Layout } from '../components/Layout';

export const Contact: React.VFC = () => {
  return (
    <Layout title="Contact Us">
      <Box
        display={{ md: 'flex' }}
        borderTop={useColorModeValue('2px solid black', '2px solid white')}
      >
        <Box pr={{ md: '8' }} width={{ base: '100%', md: '50%', xl: '50%' }}>
          <Text textStyle="paragraph">
            Feel free to contact us at{' '}
            <Link color="#567dbd" href="mailto:hicsail@bu.edu">
              hicsail@bu.edu
            </Link>{' '}
            .
          </Text>
          <ContactForm />
        </Box>
        <Box pl={{ md: '8' }} width={{ base: '100%', md: '50%', xl: '50%' }}>
          <Heading mt={{ base: '10px' }} mb={{ base: '10px', md: '20px' }}>
            Find Us
          </Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.691695530588!2d-71.10623141476769!3d42.349096081881804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f0c4ef07c1%3A0xae092ed802b7f90a!2s111%20Cummington%20Mall%2C%20Boston%2C%20MA%2002215!5e0!3m2!1sen!2sus!4v1622823890446!5m2!1sen!2sus"
            width="80%"
            height="80%"
          ></iframe>
        </Box>
      </Box>
    </Layout>
  );
};
