import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Avatar,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { CURRENTMEMBERS_LIST } from '../utils/data/peopleInformation';

export const CurrentMembers: React.VFC = () => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });

  return (
    <Layout title="Current Members">
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing="40px"
        pt="3"
        borderTop={useColorModeValue('2px solid black', '2px solid white')}
      >
        {CURRENTMEMBERS_LIST.map(
          ({ picture, name, role, outsideLinks, projects, bio }, i) => (
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

                    <Text>
                      <Text as="span" fontWeight="900">
                        Bio: {bio}
                      </Text>
                    </Text>

                    {projects == null ? (
                      <Text></Text>
                    ) : (
                      <Flex direction="row">
                        <Text mr="5px">Projects: </Text>
                        {projects.map((project, j) => (
                          <Flex mr="10px" key={j}>
                            <Link href={project.href}>
                              <Text as="u">{project.name}</Text>
                            </Link>{' '}
                          </Flex>
                        ))}
                      </Flex>
                    )}

                    <Flex direction="row">
                      <Text mr="5px">Links: </Text>{' '}
                      {outsideLinks.map((outsideLink, k) => (
                        <Flex mr="10px" key={k}>
                          <Link href={outsideLink.href}>
                            <Text as="u"> {outsideLink.name}</Text>
                          </Link>{' '}
                        </Flex>
                      ))}
                    </Flex>
                  </Stack>
                </Flex>
              </Box>
            </Flex>
          ),
        )}
      </SimpleGrid>
    </Layout>
  );
};
