import { Box, Grid, IconButton, Icon, Text } from '@chakra-ui/react';
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
  { title: 'Featured', icon: <BiData />, color: '#396CD6' },
  { title: 'All', icon: <BiGridHorizontal />, color: '#D6CA39' },
  { title: 'Data Science', icon: <BiData />, color: '#D6A339' },
  { title: 'Digital Health', icon: <BiHealth />, color: '#BBD639' },
  { title: 'Ed Tech', icon: <BiBookBookmark />, color: '#6CD639' },
  { title: 'Legacy', icon: <BiHourglass />, color: '#39D654' },
  { title: 'Natural Sciences', icon: <BiAtom />, color: '#39D6A3' },
  {
    title: 'Privacy and Security',
    icon: <BiShieldQuarter />,
    color: '#39BAD6',
  },
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
    <Box display="grid" alignSelf="start">
      {showSelect ? (
        <Box
          display="flex"
          flexDirection="row"
          padding="24px"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          {projectsOptions.map(({ title, icon, color }) => (
            <Box maxWidth="7em" display="flex" flexDirection="column">
              <IconButton
                key={title}
                aria-label="haha"
                icon={icon}
                variant="ghost"
                color={color}
                onClick={() => handleOptionSelect(title)}
                transition="transform 350ms ease-in-out"
                _hover={{
                  transform: 'scale(1.25)',
                  transition: 'transform 300ms',
                }}
                fontSize="45px"
              />
              <Text whiteSpace="initial">{title}</Text>
            </Box>
          ))}
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
