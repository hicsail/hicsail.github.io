import * as React from 'react';
import {
  ONGOINGRESEARCH_LIST,
  PASTRESEARCH_LIST,
} from '../utils/data/researchInformation';
import { ResearchGrid } from '../components/ResearchGrid';

export const Research = () => {
  return (
    <React.Fragment>
      {/* <Box height="5rem" width="50%" m="0 auto"> */}
      {/* <Text textStyle="paragraph">
          Since ideation in fall of 2014, SAIL has undertaken over 80 distinct
          software engineering projects (funded by agencies such as NSF, NIH,
          DARPA, and others). Featured here is a non-exhaustive list of current
          and past collaborations.
        </Text> */}
      {/* </Box> */}
      <ResearchGrid title="Ongoing Research" list={ONGOINGRESEARCH_LIST} />
      <ResearchGrid title="Past Research" list={PASTRESEARCH_LIST} />
    </React.Fragment>
  );
};
