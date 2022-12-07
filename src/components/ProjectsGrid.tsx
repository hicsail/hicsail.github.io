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
import { Layout } from './Layout';

interface Props {
  title: string | null;
  list: Array<ProjectInfo>;
  showText: boolean;
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
          <Box>
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
          </Box>
        ))}
      </>
    );
  } else if (selected == 'All') {
    return (
      <>
        {list.map((project: ProjectInfo, i) => (
          <Box>
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
          </Box>
        ))}
      </>
    );
  } else {
    return (
      <>
        {list.map((project: ProjectInfo, i) => (
          <Box>
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
          </Box>
        ))}
      </>
    );
  }
};

export const ProjectsGrid: React.FC<Props> = ({ title, list, showText }) => {
  const [selected, setSelected] = useState(options[0]);
  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  return (
    // <Layout title={title}>
    <Box>
      <Heading>{title}</Heading>
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
      <Box
        // borderTop={useColorModeValue('2px solid black', '2px solid white')}
        mb="1rem"
      >
        {showText ? (
          <Box>
            <Text textStyle="paragraph">
              Ongoing projects focus on a wide range of topics and technologies,
              from developing and deploying novel cybersecurity applications, to
              prototyping and deploying smart-city services and platforms.
            </Text>
            <Text textStyle="paragraph">
              SAIL is committed to promoting innovation, best practices, and
              open source models within the research community. SAIL will learn
              and help teach new technologies and techniques as determined by
              the needs of any given project.
            </Text>
          </Box>
        ) : (
          <Box></Box>
        )}

        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="1.25rem"
          justifyContent="space-between"
          mt="1rem"
        >
          <ProjectSelect selected={selected} list={list} />
          {selected == 'Featured'}

          {selected == 'All' ? (
            <>
              {list.map((project: ProjectInfo, i) => (
                <Box>
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
                  )
                </Box>
              ))}
            </>
          ) : (
            <>
              {list.map((project: ProjectInfo, i) => (
                <Box>
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
                </Box>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};
