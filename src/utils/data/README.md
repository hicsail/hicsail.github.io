##Directions an Guidebook for data.json

`import data from '../../utils/data/data.json';`

###Content

1. People
   `const people: Person[] = data['people']`
2. Projects
   `const projects = data['projects']`
3. Old Projects
   `const oldProjects = data['oldProjects']`
4. Listed Projects
   `data['listedProjects']`

###Structure

| People  |       Projects       |     Old Projects     | Listed Projects | Data Visual |
| ------- | :------------------: | :------------------: | :-------------: | ----------: |
| name    |       feaured        |       feaured        |    an array     |      header |
| picture |        title         |        title         |                 |     content |
| role    |   titleDescription   |   titleDescription   |                 |             |
| email   |     description      |     description      |                 |             |
|         |         href         |         href         |                 |             |
|         |     projectType      |     projectType      |                 |             |
|         |          pi          |          pi          |                 |             |
|         | metaDataPresentation | metaDataPresentation |                 |             |
|         | metaDataPublication  | metaDataPublication  |                 |             |

###Where it's used
**people** - People.tsx - `src/pages/People/People.tsx`
**projects** - Home.tsx - `src/pages/Home.tsx`, Projects.tsx - `src/pages/Projects.tsx`
**oldProjects** - ProjectsGrid.tsx - `src/components/ProjectsGrid/ProjectsGrid.tsx`
**dataVisual** - Projects.tsx - `src/pages/Projects.tsx`
