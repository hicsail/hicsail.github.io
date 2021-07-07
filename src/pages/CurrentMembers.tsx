import {
  Box,
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Link,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { CURRENTMEMBERS_LIST } from '../utils/peopleInformation';

export const CurrentMembers: React.VFC = () => (
  <Layout title="Current Members">
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing="40px"
      pt="3"
      borderTop={useColorModeValue('2px solid black', '2px solid white')}
    >
      {CURRENTMEMBERS_LIST.map(
        ({ picture, name, role, outsideLinks, projects, bio }) => (
          <Flex direction="row" marginBottom="30px">
            <Image
              src={picture}
              borderRadius="100px"
              boxSize={{ base: '100px', md: '150px' }}
              objectFit="cover"
            />
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
                      {projects.map((project) => (
                        <Flex mr="10px">
                          <Link href={project.href}>
                            <Text as="u">{project.name}</Text>
                          </Link>{' '}
                        </Flex>
                      ))}
                    </Flex>
                  )}

                  <Flex direction="row">
                    <Text mr="5px">Links: </Text>{' '}
                    {outsideLinks.map((outsideLink) => (
                      <Flex mr="10px">
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
