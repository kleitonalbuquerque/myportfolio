import React, { useState } from "react";
import PropTypes from "prop-types";
import ProjectModal from "../ProjectModal/ProjectModal";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardCompany,
  CardDescription,
  CardButton,
} from "./ProjectCard.styles";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CardContainer>
        <CardImage src={project.image} alt={project.title} />
        <CardContent>
          <CardTitle>{project.title}</CardTitle>
          <CardCompany>{project.company}</CardCompany>
          <CardDescription>{project.description}</CardDescription>
          <CardButton onClick={() => setIsModalOpen(true)}>
            Leia mais
          </CardButton>
        </CardContent>
      </CardContainer>
      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
