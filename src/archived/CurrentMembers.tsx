import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  useColorModeValue,
  Avatar,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import * as data from '../utils/data/data.json';

interface Person {
  picture: string;
  name: string;
  role: string;
  bio: string;
  email: string;
}

export const CurrentMembers: React.FC = () => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const people = data['people'];
  return (
    <Layout title="Current Members">
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="40px"
        pt="3"
        borderTop={useColorModeValue('2px solid black', '2px solid white')}
      >
        {people.map(({ picture, name, role }, i) => (
          <Flex direction="row" marginBottom="30px" key={i}>
            <Avatar src={picture} size={avatarSize} name={name} />
            <Box paddingLeft="40px">
              <Flex direction="column">
                <Heading marginBottom="15px">{name}</Heading>
                <Stack gap={3} fontSize="1rem">
                  <Text>
                    <Text as="span" fontWeight="900">
                      Role: {role}
                    </Text>
                  </Text>
                </Stack>
              </Flex>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Layout>
  );
};
