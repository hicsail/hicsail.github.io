import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import * as React from 'react';
import { Layout } from '../components/Layout';
import data from '../utils/data/data.json';
import LocomotiveScroll from 'locomotive-scroll';

interface Person {
  picture: string;
  name: string;
  role: string;
  bio?: string;
  email: string;
}

export const People: React.FC = () => {
  let people: Person[] = data['people'];

  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]') as HTMLElement,
    smooth: true
  })

  return (
    <Layout title="Current Members" data-scroll-container>
      <Text sx={{fontSize:"40px", opacity: 0, transition: '4s'}} data-scroll data-scroll-direction="horizontal" data-scroll-speed='-3'>Welcome to our team</Text>
      <SimpleGrid columns={[2, 2, 2, 4]} pt="3" columnGap='16px' rowGap='50px' data-scroll-section>
        {people.map(({ picture, name, role, email }, i) => (
          <Flex direction="column" marginBottom="30px" key={i}>
            <Popover trigger="hover">
              <PopoverTrigger>
                <Box data-scroll data-scroll-offset="20%">
                  <img src={picture} />
                  <Text
                    fontWeight="900"
                    fontSize="1.25rem"
                    mt="8px"
                    color="#0070c9"
                  >
                    {name}
                  </Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent left="50%">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Flex direction="column">
                    <Text as="span" fontWeight="900">
                      Role: {role}
                    </Text>
                    <Text as="span" fontWeight="900">
                      Email: {email}
                    </Text>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        ))}
      </SimpleGrid>
    </Layout>
  );
};
