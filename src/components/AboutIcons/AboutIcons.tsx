import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  BiCodeCurly,
  BiLaptop,
  BiPencil,
  BiPieChart,
  BiTrophy,
} from 'react-icons/bi';
import * as React from 'react';
import './AboutIcons.css';
import data from '../../utils/data/data.json';

export const AboutIcons: React.FC = () => {
  const iconText = data['aboutIcons'];
  return (
    <Box>
      <Heading textStyle="h2" mt="5'0px">
        Our Services
      </Heading>
      <Card boxShadow={0} padding="0">
        <CardBody backgroundColor={useColorModeValue('white', 'gray.800')}>
          <HStack id="stack">
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiLaptop} color="#178123" mb="4" />
              <Heading id="h2">{iconText[0]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiCodeCurly} color="#1b678d" mb="4" />
              <Heading id="h2">{iconText[1]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiPieChart} color="#DFDF54" mb="4" />
              <Heading id="h2">{iconText[2]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiTrophy} color="#f58711" mb="4" />
              <Heading id="h2">{iconText[3]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiPencil} color="#df5454" mb="4" />
              <Heading id="h2">{iconText[4]}</Heading>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};
