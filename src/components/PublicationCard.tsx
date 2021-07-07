import {
  Box,
  Link,
  Image,
  Heading,
  Text,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import * as React from 'react';
import { PublicationInformation } from '../utils/researchInformation';
import { Link as ReactRouterLink } from 'react-router-dom';

interface Props {
  publicationTitle: string;
  publicationHref: string;
  publicationAuthors: string;
  publicationProceeding?: string;
  publicationLocation?: string;
  publicationDate: string;
  publicationLink?: string;
}

export const PublicationCard: React.FC<Props> = ({
  publicationTitle,
  publicationHref,
  publicationAuthors,
  publicationProceeding,
  publicationLocation,
  publicationDate,
  publicationLink,
}) => {
  return (
    <Flex
      // borderBottom={useColorModeValue('2px solid black', '2px solid white')}
      mt="1rem"
      direction={['column', 'row']}
    >
      <Link href={publicationLink}>
        <Box mr="1rem" width="150px">
          <Image
            src={publicationHref}
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
            href={publicationLink}
          >
            {publicationTitle}
          </Link>
        </Text>
        <Text color="#EBB54A">{new Date(publicationDate).toDateString()}</Text>
        <Text textStyle="paragraph">
          {publicationAuthors}. Proccedings at {publicationProceeding}
          {publicationLocation}
        </Text>
      </Box>
    </Flex>
  );
};
