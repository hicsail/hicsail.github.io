import { Box, Grid } from '@chakra-ui/react';
import * as React from 'react';
import { ResearchInformation } from '../types/types';
import { Card } from './Card';
import { Layout } from './Layout';

interface Props {
  title: string;
  list: Array<ResearchInformation>;
}

export const ResearchGrid: React.FC<Props> = ({ title, list }) => {
  return (
    <Layout title={title}>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 500px))"
        gap="1.25rem"
        justifyContent="space-evenly"
      >
        {list.map((research: ResearchInformation) => (
          <Box
            maxWidth="650px"
            overflow="hidden"
            fontWeight="300"
            padding="0"
            display="inline-flex"
            flexDirection="column"
            margin="0 0 1em"
            width="100%"
            boxShadow="0 4px 8px rgba(0,30,84,0.12)"
            transform="translateY(0)"
            transition="transform 300ms"
            borderRadius="25px"
            _hover={{
              transform: 'translateY(-3px)',
              transition: 'transform 300ms',
            }}
            bg="white"
          >
            <Card
              modalButtonText={research.popTitle}
              modalHeader={research.title}
              modalBody={research.description}
              imageHref={research.href}
            />
          </Box>
        ))}
      </Grid>
    </Layout>
  );
};
