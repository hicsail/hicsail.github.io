import { Box, Flex, Heading, Stack, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { CURRENTMEMBERS_LIST } from '../utils/peopleInformation';

export const CurrentMembers: React.VFC = () => (
  <Flex display="column" justifyContent="center">
    <Box marginBottom="30px">
      <Heading>Current Members</Heading>
    </Box>
    <Box>
      <Stack direction={'row'} spacing={4}></Stack>
      {CURRENTMEMBERS_LIST.map((person) => (
        <Flex direction="row" padding="20px 20px 20px 0px">
          <Image
            src={person.picture}
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Box paddingLeft="40px">
            <Flex direction="column">
              <Heading fontSize="25px" marginBottom="15px">
                {person.name}
              </Heading>
              <Stack spacing={2} fontSize="20x">
                <Text>
                  <Text as="span" fontWeight="900">
                    Role:
                  </Text>
                  {person.role}
                </Text>
                <Text>Research: {person.research}</Text>
                <Text>{person.outsideLinks}</Text>
                <Text>{person.projects}</Text>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  </Flex>
);
