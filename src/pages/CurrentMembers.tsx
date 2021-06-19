import { Box, Flex, Heading, Stack, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { CURRENTMEMBERS_LIST } from '../utils/peopleInformation';

export const CurrentMembers: React.VFC = () => (
  <Layout title="Current Members">
    {CURRENTMEMBERS_LIST.map(
      ({ picture, name, role, research, outsideLinks, projects }) => (
        <Flex direction="row">
          <Image
            src={picture}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Box paddingLeft="40px">
            <Flex direction="column">
              <Heading marginBottom="15px">{name}</Heading>
              <Stack gap={3} fontSize="1.5rem">
                <Text>
                  <Text as="span" fontWeight="900">
                    Role: {role}
                  </Text>
                </Text>
                <Text>Research: {research}</Text>
                <Text>{outsideLinks}</Text>
                <Text>{projects}</Text>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      ),
    )}
  </Layout>
);
