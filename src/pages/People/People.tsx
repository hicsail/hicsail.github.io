import './People.css';
import {
  Box,
  Text,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Container,
  Heading,
  Grid,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
import data from '../../utils/data/data.json';

interface Person {
  picture: string;
  name: string;
  role: string;
  bio?: string;
  email: string;
}

export const People: React.FC = () => {
  let people: Person[] = data['people'];
  return (
    <Container display="block" placeItems="left" boxSizing="unset">
      <Box fontFamily="Graphik,Helvetica,Arial,sans-serif !important">
        <Text
          fontSize="14px"
          fontWeight="400"
          sx={{ WebkitFontSmoothing: 'antialiased' }}
        >
          OUR TEAM
        </Text>
        <Heading
          fontSize="3xl"
          fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
          fontWeight="500"
        >
          Who we are
        </Heading>
        <Text fontSize="15px">
          We are a company working on a multitude of interdisciplinary projects.
        </Text>
        <Text marginBottom="60px"></Text>
      </Box>
      <Grid templateColumns="repeat(2,1fr)" gap="16px">
        {people.map(({ picture, name, role, email }, i) => (
          <Container key={i}>
            <Popover trigger="hover">
              <Box>
                <PopoverTrigger>
                  <Box>
                    <Image
                      src={picture}
                      objectFit="cover"
                      transition="all .25s ease"
                    />
                    <Box marginBottom="0.5rem">
                      <Text
                        fontSize=".9375rem"
                        fontWeight="600"
                        lineHeight="1.45rem"
                        _hover={{ color: '#dcae34' }}
                        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
                      >
                        {name}
                      </Text>
                      <Text
                        fontSize=".9375rem"
                        fontWeight="400"
                        lineHeight="1rem"
                        fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
                      >
                        {role}
                      </Text>
                    </Box>
                  </Box>
                </PopoverTrigger>
              </Box>
              <PopoverContent left="50%">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Text as="span" fontWeight="900">
                    Email: {email}
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Container>
        ))}
      </Grid>
    </Container>
  );
};
