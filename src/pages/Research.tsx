import * as React from 'react';
import {
  ONGOINGRESEARCH_LIST,
  PASTRESEARCH_LIST,
} from '../utils/researchInformation';
import { ResearchGrid } from '../components/ResearchGrid';
import { Text } from '@chakra-ui/react';

export const Research = () => {
  return (
    <React.Fragment>
      <Text width="80%" margin="0 auto" textAlign="center" fontSize="1.5rem">
        Since ideation in fall of 2014, SAIL has undertaken over 80 distinct
        software engineering projects (funded by agencies such as NSF, NIH,
        DARPA, and others). Featured here is a non-exhaustive list of current
        and past collaborations.
      </Text>
      <ResearchGrid title="Ongoing Research" list={ONGOINGRESEARCH_LIST} />
      <ResearchGrid title="Past Research" list={PASTRESEARCH_LIST} />
    </React.Fragment>
  );
};
