# Software & Application Innovation Lab (SAIL)

This repository contains the official web presence of the Software & Application Innovation Lab, operated within the Hariri Institute for Computing and Computational Science and Engineering at Boston University.

The website can be viewed at https://sail.codes or https://hicsail.github.io.

## Quickstart

To run the site locally, install Node.js and clone the repository. Then, run the following commands:

```
npm install
npm start
```

The site will be served at https://localhost:8080.

## Architecture

This site is built as a single-page application using React and [Chakra UI](https://chakra-ui.com/).

This site is deployed to Github Pages. However, Github Pages does not support single-page applications. As a workaround, in this site routes are handled using Javascript redirects in the `404.html` page as described in [this template](https://github.com/rafgraph/spa-github-pages).

## Deployment

The site is automatically deployed to Github Pages on every push to the `main` branch. The `Deploy` Github Action builds the code in the `main` branch and pushes the result to the `gh-pages` branch. Github Pages then deploys the `gh-pages` branch to https://sail.codes.
