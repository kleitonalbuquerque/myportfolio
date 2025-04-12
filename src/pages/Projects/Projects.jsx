import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { ProjectsContainer, ProjectsTitle } from "./Projects.styles";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projetos</ProjectsTitle>
      <Carousel />
    </ProjectsContainer>
  );
};

export default Projects;
