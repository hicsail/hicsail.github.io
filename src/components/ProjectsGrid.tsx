import {
  Box,
  Grid,
  Text,
  Select,
  Heading,
  useDisclosure,
} from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { CardWrapper } from './CardWrapper';
import { Card } from './Card';

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
  pi: any;
  metaDataPresentation: any;
  metaDataPublication: any;
}

interface ProjectSelectProps {
  selected: string;
  list: ProjectInfo[];
}

const options = [
  { name: 'All', icon: FcGrid },
  { name: 'Data Science', icon: FcDatabase },
  { name: 'Ed Tech', icon: FcGraduationCap },
  { name: 'Privacy and Security', icon: FcKey },
  { name: 'Digital Health', icon: FcPieChart },
  { name: 'Natural Sciences', icon: FcMindMap },
];

const ProjectSelect: React.FC<ProjectSelectProps> = ({ selected, list }) => {
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
  } else {
    return (
      <>
        {list
          .filter((project) => project.projectType == selected)
          .map((project: ProjectInfo, index: number) => (
            <Box key={`${project.title}${index}`}>
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

export const ProjectsGrid: React.FC<Props> = ({
  title,
  list,
  showText,
  showSelect,
}) => {
  const [selected, setSelected] = useState(options[0].name);

  return (
    <Box>
      {showSelect ? (
        <Select
          width="inherit"
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

{
  /*
{showText ? (
				<Box>
					<Text textStyle="paragraph">
						SAIL projects are grouped into program areas, ranging from Digital Health to Data
						Science to Privacy & Security and Natural Sciences. Several example projects from these
						areas are featured below.
					</Text>
				</Box>
			) : (
				<Box></Box>
			)}}
      */
}
