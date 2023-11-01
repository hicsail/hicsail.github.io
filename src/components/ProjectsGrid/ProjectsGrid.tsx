import { Box, Grid, Button, Icon, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { Card } from '../Card';
import data from '../../utils/data/data.json';
import './ProjectsGrid.css';
import {
  BiData,
  BiHealth,
  BiBookBookmark,
  BiHourglass,
  BiAtom,
  BiShieldQuarter,
  BiGridHorizontal,
} from 'react-icons/bi';

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
  { title: 'Featured', icon: BiData },
  { title: 'All', icon: BiGridHorizontal },
  { title: 'Data Science', icon: BiData },
  { title: 'Digital Health', icon: BiHealth },
  { title: 'Ed Tech', icon: BiBookBookmark },
  { title: 'Legacy', icon: BiHourglass },
  { title: 'Natural Sciences', icon: BiAtom },
  { title: 'Privacy and Security', icon: BiShieldQuarter },
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
                key={`${index}${project.title}`}
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
            key={index}
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
              key={project.title}
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
  const projectsOptions = showSelect ? options.slice(1) : options;
  const [selected, setSelected] = useState(projectsOptions[0].title);

  const handleOptionSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <Box>
      {showSelect ? (
        <Box>
          <Box
            borderWidth="1px"
            display="flex"
            flexDirection="row"
            padding="24px"
            justifyContent="space-between"
          >
            {projectsOptions.map(({ title, icon }) => (
              <Button
                key={title}
                onClick={() => handleOptionSelect(title)}
                variant="ghost"
                display="flex"
                flexDirection="column"
                maxWidth="6em"
                transition="transform 350ms ease-in-out"
                _hover={{
                  transform: 'scale(1.05)',
                  transition: 'transform 300ms',
                }}
              >
                <Icon id="glyphicon" as={icon} color="blue.400" />
                <Text whiteSpace="initial">{title}</Text>
              </Button>
            ))}
          </Box>
        </Box>
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
