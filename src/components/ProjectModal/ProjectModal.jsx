import React from "react";
import PropTypes from "prop-types";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalImage,
  ModalText,
} from "./ProjectModal.styles";

const ProjectModal = ({ project, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>
            {project.title} - {project.company}
          </h2>
          <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        </ModalHeader>
        <ModalContent>
          <ModalImage src={project.image} alt={project.title} />
          <ModalText>
            <p>{project.details}</p>
          </ModalText>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
