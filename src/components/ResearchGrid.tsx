import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
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
      <Box
        borderTop={useColorModeValue('2px solid black', '2px solid white')}
        mb="1rem"
      >
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="1.25rem"
          justifyContent="space-between"
          mt="1rem"
        >
          {list.map((research: ResearchInformation, i) => (
            <Box
              maxWidth="300px"
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
              mt="1rem"
              key={i}
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
      </Box>
    </Layout>
  );
};
