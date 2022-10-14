import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { ProjectInfo } from '../types/types';
import { Card } from './Card';
import { Layout } from './Layout';

interface Props {
  title: string;
  list: Array<ProjectInfo>;
}

export const ProjectsGrid: React.FC<Props> = ({ title, list }) => {
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
          {list.map((project: ProjectInfo, i) => (
            <Box
              maxWidth="300px"
              overflow="hidden"
              fontWeight="300"
              padding="0"
              display="inline-flex"
              flexDirection="column"
              margin="0 0 1em"
              width="100%"
              boxShadow={useColorModeValue(
                '0 4px 8px rgba(0,30,84,0.12)',
                '0 4px 8px rgba(0,0,0,0.38)',
              )}
              transform="translateY(0)"
              transition="transform 300ms"
              _hover={{
                transform: 'translateY(-3px)',
                transition: 'transform 300ms',
              }}
              bg={useColorModeValue('white', '#2a2e35')}
              mt="1rem"
              key={i}
            >
              <Card
                modalButtonText={project.title}
                modalButtonSubText={project.titleDescription}
                modalHeader={project.title}
                modalBody={project.description}
                imageHref={project.href}
                pi={project.pi}
                metaData={project.metaData}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};
