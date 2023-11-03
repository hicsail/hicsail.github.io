import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiDollarCircle, BiBuilding, BiGroup } from 'react-icons/bi';
import * as React from 'react';
import './DataVisual.css';
import data from '../../utils/data/data.json';

export const DataVisual: React.FC = () => {
  const dataVisual = data['dataVisual'];
  return (
    <Box>
      <Card boxShadow={0}>
        <CardBody backgroundColor={useColorModeValue('white', 'gray.800')}>
          <HStack id="stackityStack">
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiBuilding} color="blue.400" />
              <Heading id="cardHeading">{dataVisual[0].header}</Heading>
              <Text id="cardText">{dataVisual[0].content}</Text>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiDollarCircle} color="green.400" />
              <Heading id="cardHeading">{dataVisual[1].header}</Heading>
              <Text id="cardText">{dataVisual[1].content}</Text>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiGroup} color="red.400" />
              <Heading id="cardHeading">{dataVisual[2].header}</Heading>
              <Text id="cardText">{dataVisual[2].content}</Text>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};
