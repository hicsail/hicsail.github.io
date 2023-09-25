import { Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { Card } from './Card';
import * as React from 'react';

interface Project {
  title: string;
  titleDescription: string;
  description: string;
  href: string;
  pi: any;
  metaDataPublication?: string;
  metaDataPresentation?: string;
}

interface WrapperProps {
  project: Project;
}

export const CardWrapper: React.FC<WrapperProps> = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxWidth="300px"
      overflow="hidden"
      fontWeight="300"
      padding="0"
      display="inline-flex"
      flexDirection="column"
      margin="0 0 1em"
      width="100%"
      boxShadow={useColorModeValue(
        '0 4px 8px rgba(0,30,84,0.12)',
        '0 4px 8px rgba(0,0,0,0.38)',
      )}
      transform="translateY(0)"
      transition="transform 300ms"
      _hover={{
        transform: 'translateY(-3px)',
        transition: 'transform 300ms',
      }}
      bg={useColorModeValue('white', '#2a2e35')}
      mt="1rem"
      key={project.title}
    >
      <Card
        modalButtonText={project.title}
        modalButtonSubText={project.titleDescription}
        modalHeader={project.title}
        modalBody={project.description}
        imageHref={project.href}
        pi={project.pi}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};
