import { Flex, Box, Link, Image } from '@chakra-ui/react';
import * as React from 'react';

export const Banner: React.VFC = () => {
  return (
    <Flex direction="row" alignItems="center" bg="#121212" width="100%" p="8px">
      <Link href="https://www.bu.edu/hic/">
        <Flex
          objectFit="cover"
          marginRight="10px"
          marginBottom="5px"
          ml="32px"
          height="45px"
        >
          <Flex height="48px" mr="12px" justifyContent="center">
            <Image src="../../img/bu-logo.png" />
          </Flex>
          <Box boxSize="xs">
            <Image src="../../img/Hariri_Institute_SAIL_Logotype_White_Web.png" />
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};
