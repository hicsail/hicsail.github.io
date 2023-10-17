import { Box, Grid, Select } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { Card } from './Card';
import data from '../utils/data/data.json';

interface Props {
  title: string | null;
  list: ProjectInfo[];
  showText: boolean;
  showSelect: boolean;
}

interface ProjectInfo {
  featured?: boolean;
  title: string;
  titleDescription: string;
  description: string;
  href: string;
  projectType: string;
  pi: any;
  metaDataPresentation: any;
  metaDataPublication: any;
}

interface ProjectSelectProps {
  selected: string;
  list: ProjectInfo[];
}

const options = [
  'Featured',
  'All',
  'Data Science',
  'Ed Tech',
  'Privacy and Security',
  'Digital Health',
  'Natural Sciences',
  'Legacy',
];

const ProjectSelect: React.FC<ProjectSelectProps> = ({ selected, list }) => {
  const oldProjects = data['oldProjects'];
  if (selected == 'All') {
    return (
      <>
        {list.map((project: ProjectInfo, index: number) => (
          <Box
            key={`${project.title}${index}`}
            transition="transform 350ms ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
              transition: 'transform 300ms',
            }}
          >
            <Card
              modalButtonText={project.title}
              modalButtonSubText={project.titleDescription}
              modalHeader={project.title}
              modalBody={project.description}
              imageHref={project.href}
              pi={project.pi}
            />
          </Box>
        ))}
      </>
    );
  } else if (selected == 'Featured') {
    return (
      <>
        {list.map((project: ProjectInfo, index: number) => (
          <>
            {project.featured == true && (
              <Box
                key={`${project.title}${index}`}
                transition="transform 350ms ease-in-out"
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 300ms',
                }}
              >
                <Card
                  modalButtonText={project.title}
                  modalButtonSubText={project.titleDescription}
                  modalHeader={project.title}
                  modalBody={project.description}
                  imageHref={project.href}
                  pi={project.pi}
                />
              </Box>
            )}
          </>
        ))}
      </>
    );
  } else if (selected == 'Legacy') {
    return (
      <>
        {oldProjects.map((project: ProjectInfo, index: number) => (
          <Box
            key={`${project.title}${index}`}
            transition="transform 350ms ease-in-out"
            _hover={{
              transform: 'scale(1.05)',
              transition: 'transform 300ms',
            }}
          >
            <Card
              modalButtonText={project.title}
              modalButtonSubText={project.titleDescription}
              modalHeader={project.title}
              modalBody={project.description}
              imageHref={project.href}
              pi={project.pi}
            />
          </Box>
        ))}
      </>
    );
  } else {
    return (
      <>
        {list
          .filter((project) => project.projectType == selected)
          .map((project: ProjectInfo, index: number) => (
            <Box
              key={`${project.title}${index}`}
              transition="transform 350ms ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
                transition: 'transform 300ms',
              }}
            >
              <Card
                modalButtonText={project.title}
                modalButtonSubText={project.titleDescription}
                modalHeader={project.title}
                modalBody={project.description}
                imageHref={project.href}
                pi={project.pi}
              />
            </Box>
          ))}
      </>
    );
  }
};

export const ProjectsGrid: React.FC<Props> = ({ list, showSelect }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Box>
      {showSelect ? (
        <Select
          width="auto"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {options.map((name: string) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </Select>
      ) : (
        <></>
      )}
      <Box mb="1rem">
        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap="8px"
          mt="1rem"
          boxSizing="border-box"
        >
          <ProjectSelect selected={selected} list={list} />
        </Grid>
      </Box>
    </Box>
  );
};
