import { Flex, Box, Link, Image } from '@chakra-ui/react';
import * as React from 'react';

export const Banner: React.FC = () => {
  return (
    <Flex
      direction="row"
      bg="#121212"
      width="100%"
      padding="10px 20px 10px 40px"
    >
      <Link href="https://www.bu.edu/hic/">
        <Flex objectFit="-moz-initial" marginBottom="5px" height="50px">
          <Flex height="48px" paddingRight="2em" justifyContent="start">
            <Image width="4.5rem" src="../../img/bu-logo.png" />
          </Flex>
          <Box boxSize={['14em', '16em', '18em', '20em']} paddingTop="0.2em">
            <Image
              width="100%"
              src="../../img/Hariri_Institute_SAIL_Logotype_White_Web.png"
            />
          </Box>
        </Flex>
      </Link>
    </Flex>
  );
};
