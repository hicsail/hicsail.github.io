import {
  Container,
  Text,
  Popover,
  Box,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import React from 'react';

interface Person {
  picture: string;
  name: string;
  role: string;
  bio?: string;
  email: string;
}

interface PersonProps {
  person: Person;
}

export const Person: React.FC<PersonProps> = ({ person }: PersonProps) => {
  return (
    <Container>
      <Popover trigger="hover">
        <PopoverTrigger>
          <Box minHeight="470px">
            <img
              style={{ minWidth: '310px' }}
              src={person.picture}
              loading="lazy"
            />

            <Text
              fontSize=".9375rem"
              fontWeight="600"
              lineHeight="1.45rem"
              _hover={{ color: '#dcae34' }}
              fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
            >
              {person.name}
            </Text>
            <Text
              fontSize=".9375rem"
              fontWeight="400"
              lineHeight="0.75rem"
              fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
            >
              {person.role}
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverBody>
            <Text
              fontWeight={500}
              fontStyle="italic"
              fontSize=".8rem"
              fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
            >
              email: {person.email}
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Container>
  );
};
