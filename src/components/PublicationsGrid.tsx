import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { PublicationInformation } from '../types/types';
import { Layout } from './Layout';
import { PublicationCard } from './PublicationCard';

interface Props {
  title: string;
  list: Array<PublicationInformation>;
}

export const PublicationsGrid: React.FC<Props> = ({ title, list }: Props) => {
  return (
    <Layout title={title}>
      {list.map((publication: PublicationInformation, i) =>
        publication.firstOfYear ? (
          <Box
            borderTop={useColorModeValue('2px solid black', '2px solid white')}
            key={i}
          >
            <Heading textStyle="h2" mt="10px">
              {new Date(publication.date).getFullYear()}
            </Heading>
            <PublicationCard publication={publication} />
          </Box>
        ) : (
          <Box key={i}>
            <PublicationCard publication={publication} />
          </Box>
        ),
      )}
    </Layout>
  );
};
