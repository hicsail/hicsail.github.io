import { Box, Grid, Text, Select, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { CardWrapper } from './CardWrapper';

import {
  FcDatabase,
  FcGrid,
  FcGraduationCap,
  FcLike,
  FcMindMap,
  FcKey,
  FcPieChart,
} from 'react-icons/Fc';
import { IconType } from 'react-icons';

interface Props {
  title: string | null;
  list: ProjectInfo[];
  showText: boolean;
  showSelect: boolean;
}

interface ProjectInfo {
  title: string;
  titleDescription: string;
  description: string;
  href: string;
  projectType: string;
  featured: boolean;
  pi: any;
  metaDataPresentation: any;
  metaDataPublication: any;
}

interface ProjectSelectProps {
  selected: string;
  list: ProjectInfo[];
}

const options = [
  { name: 'Featured', icon: FcLike },
  { name: 'All', icon: FcGrid },
  { name: 'Data Science', icon: FcDatabase },
  { name: 'Ed Tech', icon: FcGraduationCap },
  { name: 'Privacy and Security', icon: FcKey },
  { name: 'Digital Health', icon: FcPieChart },
  { name: 'Natural Sciences', icon: FcMindMap },
];

const ProjectSelect: React.FC<ProjectSelectProps> = ({ selected, list }) => {
  if (selected == 'Featured') {
    return (
      <>
        {list
          .filter((project) => project.featured == true)
          .map((project: ProjectInfo, index: number) => (
            <Box key={`${project.title}${index}`}>
              <CardWrapper project={project} />
            </Box>
          ))}
      </>
    );
  } else if (selected == 'All') {
    return (
      <>
        {list.map((project: ProjectInfo, index: number) => (
          <Box key={`${project.title}${index}`}>
            <CardWrapper project={project} />
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
            <Box key={`${project.title}${index}`}>
              <CardWrapper project={project} />
            </Box>
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
  const [selected, setSelected] = useState(options[0].name);

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
          {options.map((option: { name: string; icon: IconType }) => (
            <option value={option.name} key={option.name}>
              {option.name}
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
