import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { PublicationInformation } from '../utils/researchInformation';
import { Layout } from './Layout';
import { PublicationCard } from './PublicationCard';

interface Props {
  title: string;
  list: Array<PublicationInformation>;
}

export const PublicationsGrid: React.FC<Props> = ({ title, list }: Props) => {
  const [year, setYear] = React.useState(0);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  //   const currentYear =

  const getyear = (publication: PublicationInformation): number => {
    const date = new Date(publication.date);
    return date.getFullYear();
  };

  return (
    <Layout title={title}>
      {list.map((publication: PublicationInformation) =>
        publication.firstOfYear ? (
          <Box
            borderTop={useColorModeValue('2px solid black', '2px solid white')}
          >
            <Heading textStyle="h2" mt="10px">
              {new Date(publication.date).getFullYear()}
            </Heading>
            <PublicationCard
              publicationTitle={publication.title}
              publicationHref={publication.href}
              publicationAuthors={publication.authors}
              publicationProceeding={publication.proceeding}
              publicationLocation={publication.location}
              publicationDate={publication.date}
              publicationLink={publication.link}
            />
          </Box>
        ) : (
          <Box>
            <PublicationCard
              publicationTitle={publication.title}
              publicationHref={publication.href}
              publicationAuthors={publication.authors}
              publicationProceeding={publication.proceeding}
              publicationLocation={publication.location}
              publicationDate={publication.date}
              publicationLink={publication.link}
            />
          </Box>
        ),
      )}
    </Layout>
  );
};
