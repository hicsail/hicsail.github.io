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

export const DataVisual: React.FC = () => {
  return (
    <Box>
      <Card boxShadow={0}>
        <CardBody backgroundColor={useColorModeValue('white', 'gray.800')}>
          <HStack
            id="stackityStack"
            margin="0.3em 1.5em"
            justifyContent="space-between"
          >
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiBuilding} color="blue.400" />
              <Heading id="cardHeading">30+</Heading>
              <Text id="cardText">
                Dynamic and enduring partnerships we've forged since 2022.
              </Text>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiDollarCircle} color="green.400" />
              <Heading id="cardHeading">40+</Heading>
              <Text id="cardText">Projects</Text>
            </Box>
            <Box id="innerCard">
              <Icon id="cardIcon" as={BiGroup} color="red.400" />
              <Heading id="cardHeading">100+</Heading>
              <Text id="cardText">
                Faculty members we have had pleasure collaborating.
              </Text>
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};
