import {
  Box,
  Text,
  Grid,
  Link,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { PROJECT_LIST } from '../utils/projectInformation';

export const HighlightedProjectGrid = () => {
  return (
    <Grid
      padding={['0px', '0px', '72px']}
      gridColumn="3 / -1"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gridGap="43px"
      // mobile
      // gridColumnStart={['1', '1', 'auto']}
      // padding="0"
    >
      {PROJECT_LIST.map((project) => (
        <Box
          borderBottom={useColorModeValue('2px solid black', '2px solid white')}
          paddingBottom="2em"
        >
          <Text fontSize="2.7rem">{project.title}</Text>
          <Text textStyle="paragraph">{project.text}</Text>
          <Text textStyle="paragraph">
            <b>PI(s): </b>
            <Link href={project.investigatorLink} color="#567dbd">
              {project.investigatorName},{' '}
            </Link>
            <Text as="span">{project.investigatorTitle}</Text>
          </Text>
        </Box>
      ))}
    </Grid>
  );
};
