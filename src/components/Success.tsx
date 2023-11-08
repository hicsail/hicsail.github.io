import { Flex, Text, Link, Image } from '@chakra-ui/react';
import * as React from 'react';

export const Success: React.FC = () => {
  return (
    <Flex
      direction="row"
      bg="#121212"
      width="100%"
      padding="10px 20px 10px 40px"
    >
      <Text>Thank You!</Text>
      <Text>Your Form Was Send Successfully.</Text>
    </Flex>
  );
};
