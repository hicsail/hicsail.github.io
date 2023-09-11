import {
  Box,
  Grid,
  useColorModeValue,
  Text,
  Select,
  Heading,
} from '@chakra-ui/react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ProjectInfo } from '../types/types';
import { Card } from './Card';

interface Props {
  title: string | null;
  list: Array<ProjectInfo>;
  showText: boolean;
  showSelect: boolean;
}

interface ProjectSelectProps {
  selected: string;
  list: Array<ProjectInfo>;
}

const options = [
  'Featured',
  'All',
  'Data Science',
  'Ed Tech',
  'Privacy and Security',
  'Digital Health',
  'Natural Sciences',
];

const ProjectSelect: React.FC<ProjectSelectProps> = ({ selected, list }) => {
  if (selected == 'Featured') {
    return (
      <>
        {list.map((project: ProjectInfo, i) => (
          <>
            {project.featured == true && (
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
                key={i}
              >
                <Card
                  modalButtonText={project.title}
                  modalButtonSubText={project.titleDescription}
                  modalHeader={project.title}
                  modalBody={project.description}
                  imageHref={project.href}
                  pi={project.pi}
                  metaDataPublication={project.metaDataPublication}
                  metaDataPresentation={project.metaDataPresentation}
                />
              </Box>
            )}
          </>
        ))}
      </>
    );
  } else if (selected == 'All') {
    return (
      <>
        {list.map((project: ProjectInfo, i) => (
          <>
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
              key={i}
            >
              <Card
                modalButtonText={project.title}
                modalButtonSubText={project.titleDescription}
                modalHeader={project.title}
                modalBody={project.description}
                imageHref={project.href}
                pi={project.pi}
                metaDataPublication={project.metaDataPublication}
                metaDataPresentation={project.metaDataPresentation}
              />
            </Box>
          </>
        ))}
      </>
    );
  } else {
    return (
      <>
        {list.map((project: ProjectInfo, i) => (
          <>
            {project.projectType == selected && (
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
                key={i}
              >
                <Card
                  modalButtonText={project.title}
                  modalButtonSubText={project.titleDescription}
                  modalHeader={project.title}
                  modalBody={project.description}
                  imageHref={project.href}
                  pi={project.pi}
                  metaDataPublication={project.metaDataPublication}
                  metaDataPresentation={project.metaDataPresentation}
                />
              </Box>
            )}
          </>
        ))}
      </>
    );
  }
};

export const ProjectsGrid: React.FC<Props> = ({
  title,
  list,
  showText,
  showSelect,
}) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Box>
      <Heading>{title}</Heading>
      {showText ? (
        <Box>
          <Text textStyle="paragraph">
            Having worked with over 70 collaborators across 20 schools at Boston
            University, SAIL is committed to developing open-source software
            products that have direct impacts on academic research, public
            service, and industry.
          </Text>
          <Text textStyle="paragraph">
            SAIL projects are grouped into program areas, ranging from Digital
            Health to Data Science to Privacy & Security and Natural Sciences.
            Several example projects from these areas are featured below.
          </Text>
        </Box>
      ) : (
        <Box></Box>
      )}
      {showSelect ? (
        <Select
          placeholder="Select Project Type"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </Select>
      ) : (
        <></>
      )}
      <Box mb="1rem">
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="1.25rem"
          justifyContent="space-between"
          mt="1rem"
        >
          <ProjectSelect selected={selected} list={list} />
        </Grid>
      </Box>
    </Box>
  );
};
