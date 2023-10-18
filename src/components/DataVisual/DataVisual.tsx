import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Icon,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { BiDollarCircle, BiBuilding, BiGroup } from 'react-icons/bi';
import { Pie } from '../CircularProgress';
import * as React from 'react';
import './DataVisual.css';

export const DataVisual: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <HStack
          id="stackityStack"
          margin="5px 20px 5px 20px"
          divider={<StackDivider />}
          justifyContent="space-between"
        >
          <Box id="innerCard">
            <Icon id="cardIcon" as={BiBuilding} color="blue.400" />
            <Heading id="cardHeading">30+</Heading>
            <Text id="cardText">
              Over the years, we've proudly forged dynamic and enduring
              partnerships with a diverse array of over 30 difference university
              departments.
            </Text>
          </Box>
          <Box id="innerCard">
            <Icon id="cardIcon" as={BiDollarCircle} color="green.400" />
            <Heading id="cardHeading">$3M</Heading>
            <Text id="cardText">
              In the course of three years, we've garnered $3 million in
              funding—a testament to our enduring journey and the resources that
              fuel our impactful projects.
            </Text>
          </Box>
          <Box id="innerCard">
            <Icon id="cardIcon" as={BiGroup} color="red.400" />
            <Heading id="cardHeading">100+</Heading>
            <Text id="cardText">
              Collaborated with over 100 visionary faculty members, nurturing
              their quests and propelling profound research.
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
