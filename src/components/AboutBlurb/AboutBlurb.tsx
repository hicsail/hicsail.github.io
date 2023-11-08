import {
  Box,
  Card,
  CardBody,
  HStack,
  Icon,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BiLaptop,
  BiCodeCurly,
  BiPencil,
  BiClipboard,
  BiPieChart,
} from 'react-icons/bi';
import * as React from 'react';
import './AboutBlurb.css';

export const AboutBlurb: React.FC = () => {
  return (
    <Box>
      <Heading textStyle="h2" mt="5'0px">
        Our Services
      </Heading>
      <Card boxShadow={0} padding="0">
        <CardBody backgroundColor={useColorModeValue('white', 'gray.800')}>
          <HStack id="stackityStack">
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiLaptop} color="#178123" />
              <Heading id="h2">
                Full stack web and mobile app development.
              </Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiCodeCurly} color="#1b678d" />
              <Heading id="h2">Code base refactoring and maintenance.</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiPieChart} color="#f58711" />
              <Heading id="h2">
                Project and product management guidance.
              </Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiPencil} color="#df5454" />
              <Heading id="h2">Proposal and grant writing.</Heading>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};
