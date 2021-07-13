import { Box, Link, Image, Text, Flex } from '@chakra-ui/react';
import * as React from 'react';
import { PublicationInformation } from '../types/types';

interface Props {
  publication: PublicationInformation;
}

export const PublicationCard: React.FC<Props> = ({ publication }) => {
  return (
    <Flex mt="1rem" direction={['column', 'row']}>
      <Link href={publication.link}>
        <Box mr="1rem" width="150px">
          <Image
            src={publication.href}
            width="100%"
            objectFit="cover"
            fallbackSrc="../../img/sail-image-placeholder.png"
          ></Image>
        </Box>
      </Link>
      <Box>
        <Text as="u">
          <Link
            textStyle="paragraph"
            mt="0px"
            pt="0px"
            fontSize="1.5rem"
            href={publication.link}
          >
            {publication.title}
          </Link>
        </Text>
        <Text color="#EBB54A">{new Date(publication.date).toDateString()}</Text>
        <Text textStyle="paragraph">
          {publication.authors}. Proccedings at {publication.proceeding}
          {publication.location}
        </Text>
      </Box>
    </Flex>
  );
};
