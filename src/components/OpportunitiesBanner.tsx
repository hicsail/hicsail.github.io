import { Box, Button, Link, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface Props {
  opportunityAvailable: boolean;
}

export const OpportunitiesBanner: React.FC<Props> = ({
  opportunityAvailable,
}) => {
  return opportunityAvailable ? (
    <Box width="80%" textAlign="center" mb="15px">
      <Button width="100%" bg="#73A6FC">
        <Link as={ReactRouterLink} to="/join">
          <Text fontSize="1.25rem">SAIL is Currently Hiring</Text>
        </Link>
      </Button>
    </Box>
  ) : (
    <Box></Box>
  );

  // <Box width="100%" height={opportunityAvailable ? '100%' : '0%'}>
  //   <Text>SAIL is Currently Hiring</Text>
  // </Box>
};
