import {
  Flex,
  Box,
  Link,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
// import { Link } from 'react-router-dom';

export const Banner: React.VFC = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      //   justifyContent="center"
      bg={useColorModeValue('#121212', 'white')}
      // bg={useColorModeValue('white', '#121212')}
      width="100%"
      p="8px"
    >
      <Box
        boxSize="45px"
        objectFit="cover"
        marginRight="10px"
        marginBottom="5px"
        ml="32px"
      >
        <Link href="https://www.bu.edu/hic/">
          <Image src="../../img/bu-logo.png" />
        </Link>
      </Box>
      <Box>
        {' '}
        <Link
          href="https://www.bu.edu/hic/"
          _hover={{ textDecoration: 'none' }}
        >
          <Text
            fontSize={'1.25rem'}
            fontFamily="Karbon"
            fontWeight={500}
            maxWidth="500px"
            // bg={useColorModeValue('#121212', 'white')}

            color={useColorModeValue('white', '#121212')}
          >
            Rafik B. Hariri Institute for Computing and Computational Science &
            Engineering
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
