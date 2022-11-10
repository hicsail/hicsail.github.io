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
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Image,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { CURRENTMEMBERS_LIST } from '../utils/data/peopleInformation';

export const People: React.VFC = () => {
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });

  return (
    <Layout title="Current Members">
      <SimpleGrid
        columns={[2, 2, 2, 4]}
        // spacing="40px"
        pt="3"
        // borderTop={useColorModeValue('2px solid black', '2px solid white')}
      >
        {CURRENTMEMBERS_LIST.map(({ picture, name, role, bio }, i) => (
          <Flex direction="column" marginBottom="30px" key={i}>
            <Popover trigger="hover">
              <PopoverTrigger>
                {/* <Button> */}
                {/* <Avatar src={picture} size={avatarSize} name={name} /> */}
                <Box>
                  <Image
                    src={picture}
                    boxSize="200px"
                    borderRadius="6px"
                    objectFit="cover"
                  />
                  <Text
                    fontWeight="900"
                    fontSize="1.25rem"
                    mt="8px"
                    color="#0070c9"
                  >
                    {name}
                  </Text>
                </Box>
                {/* </Button> */}
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
                <PopoverBody>
                  <Text>
                    <Text as="span" fontWeight="900">
                      Role: {role}
                    </Text>
                  </Text>
                  <Text>
                    {/* <Text as="span" fontWeight="900">
                      Bio: {bio}
                    </Text> */}
                  </Text>{' '}
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* <Box paddingLeft="40px">
              <Flex direction="column">
                <Heading marginBottom="15px" fontSize="2rem">
                  {name}
                </Heading>
                <Stack gap={3} fontSize="1rem"></Stack>
              </Flex>
            </Box> */}
          </Flex>
        ))}
      </SimpleGrid>
    </Layout>
  );
};
