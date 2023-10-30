import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { BiDollarCircle, BiBuilding, BiGroup } from 'react-icons/bi';
import { Pie } from '../CircularProgress';
import * as React from 'react';
import './DataVisual.css';

export const DataVisual: React.FC = () => {
  return (
    <Card boxShadow={0}>
      <CardBody backgroundColor="gray.800">
        <HStack
          id="stackityStack"
          margin="5px 20px 5px 20px"
          justifyContent="space-between"
        >
          <Box id="innerCard">
            <Icon id="cardIcon" as={BiBuilding} color="blue.400" />
            <Heading id="cardHeading">30+</Heading>
            <Text id="cardText">
              Since 2022 we've proudly forged dynamic and enduring partnerships
            </Text>
          </Box>
          <Box id="innerCard">
            <Icon id="cardIcon" as={BiDollarCircle} color="green.400" />
            <Heading id="cardHeading">$3M</Heading>
            <Text id="cardText">Since 2022 we've garnered $3 million in</Text>
          </Box>
          <Box id="innerCard">
            <Icon id="cardIcon" as={BiGroup} color="red.400" />
            <Heading id="cardHeading">100+</Heading>
            <Text id="cardText">
              Collaborated with over 100 visionary faculty members, nurturing
            </Text>
          </Box>

          <Box id="innerCard">
            <Box marginLeft="auto" marginRight="auto">
              <Pie colour="lightyellow" percentage={83} />
            </Box>
            <Heading id="cardHeading" fontSize="17px !important">
              Percents
            </Heading>
            <Text id="cardText">
              This statistic can be shown through percentages.
            </Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};
