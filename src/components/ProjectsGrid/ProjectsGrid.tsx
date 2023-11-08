import {
  Box,
  Grid,
  IconButton,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
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
  { title: 'All', icon: <BiGridHorizontal />, color: '#D6A339' },
  { title: 'Data Science', icon: <BiData />, color: '#D6CA39' },
  { title: 'Digital Health', icon: <BiHealth />, color: '#BBD639' },
  { title: 'Ed Tech', icon: <BiBookBookmark />, color: '#6CD639' },
  { title: 'Natural Sciences', icon: <BiAtom />, color: '#39D654' },
  {
    title: 'Privacy and Security',
    icon: <BiShieldQuarter />,
    color: '#39D6A3',
  },
  { title: 'Legacy', icon: <BiHourglass />, color: '#39BAD6' },
];

const ProjectSelect: React.FC<ProjectSelectProps> = ({ selected, list }) => {
  const oldProjects = data['oldProjects'];
  if (selected == 'All') {
    return (
      <>
        {list.map((project: ProjectInfo, index: number) => (
          <Box id="projectCard" key={`${project.title}${index}`}>
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
              <Box id="projectCard" key={`${index}${project.title}`}>
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
          <Box id="projectCard" key={index}>
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
            <Box id="projectCard" key={project.title}>
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
        <Box id="outerBox">
          {projectsOptions.map(({ title, icon, color }) => (
            <Box id="categoriesBox">
              <IconButton
                id="icon"
                title={title}
                key={title}
                aria-label="filtering"
                icon={icon}
                variant="ghost"
                color={
                  selected == title
                    ? useColorModeValue('gray.500', 'white')
                    : color
                }
                onClick={() => handleOptionSelect(title)}
              />
              <Text
                id="categoryText"
                whiteSpace="initial"
                color={
                  selected == title
                    ? '#fe9615'
                    : useColorModeValue('gray.800', 'white')
                }
              >
                {title}
              </Text>
            </Box>
          ))}
        </Box>
      ) : (
        <></>
      )}
      <Box mb="1rem">
        <Grid id="projectsGrid" mt="1rem">
          <ProjectSelect selected={selected} list={list} />
        </Grid>
      </Box>
    </Box>
  );
};
