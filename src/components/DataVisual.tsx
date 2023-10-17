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
import { BiDollarCircle, BiFolderOpen } from 'react-icons/bi';
import { Pie } from './CircularProgress';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import * as React from 'react';

export const DataVisual: React.FC = () => {
  ChartJS.register(ArcElement, Tooltip);
  const data = {
    labels: ['first', 'second', 'third'],
    datasets: [
      {
        data: [71, 123, 88, 101, 31, 115],
        backgroundColor: [
          '#d64439',
          '#9339d6',
          '#4439d6',
          '#d639ef',
          '#d6397d',
          '#d69339',
        ],
        hoverBorderColor: [
          '#d64439',
          '#9339d6',
          '#4439d6',
          '#d639ef',
          '#d6397d',
          '#d69339',
        ],
        hoverBackgroundColor: [
          '#d64439',
          '#9339d6',
          '#4439d6',
          '#d639ef',
          '#d6397d',
          '#d69339',
        ],
        borderWidth: 1.5,
        hoverBorderWidth: 1.9,
        hoverOffset: 0,
        radius: '65%',
      },
    ],
  };

  return (
    <Card>
      <CardBody>
        <HStack padding="15px 0 20px 0" divider={<StackDivider />} spacing="4">
          <Box>
            <Pie colour="lightblue" percentage={83} />
            <Heading size="xs" textTransform="uppercase">
              Percents
            </Heading>
            <Text pt="2" fontSize="sm">
              This statistic can be shown through percentages.
            </Text>
          </Box>

          <Box>
            <Icon
              as={BiFolderOpen}
              color="blue.500"
              w={12}
              h={12}
              margin="auto"
            />
            <Heading fontSize="50px" textTransform="uppercase">
              50
            </Heading>
            <Text fontStyle="italic">projects in 2023 alone</Text>
            <Text pt="2" fontSize="sm">
              Wow, what a great number of projects we have done in the past
              year!
            </Text>
          </Box>
          <Box>
            <Doughnut data={data} />
            <Heading size="xs" textTransform="uppercase">
              Wow!
            </Heading>
            <Text pt="2" fontSize="sm">
              Numbers, numbers, numbers that are super impressive.
            </Text>
          </Box>
          <Box>
            <Icon
              as={BiDollarCircle}
              color="green.500"
              w={12}
              h={12}
              margin="auto"
            />
            <Heading fontSize="50px" textTransform="uppercase">
              $20.3K
            </Heading>
            <Text pt="2" fontSize="sm">
              We have so much money, it's insane
            </Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};
function useCountUp(arg0: {
  isCounting: boolean;
  duration: number;
  start: number;
  end: number;
}): {
  value: any;
  reset: any;
} {
  throw new Error('Function not implemented.');
}
