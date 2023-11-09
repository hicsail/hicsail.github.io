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
          <HStack id="stackityStack">
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiLaptop} color="#178123" />
              <Heading id="h2">{iconText[0]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiCodeCurly} color="#1b678d" />
              <Heading id="h2">{iconText[1]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiPieChart} color="#DFDF54" />
              <Heading id="h2">{iconText[2]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiTrophy} color="#f58711" />
              <Heading id="h2">{iconText[3]}</Heading>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiPencil} color="#df5454" />
              <Heading id="h2">{iconText[4]}</Heading>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};
