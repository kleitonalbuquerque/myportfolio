import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { CarouselContainer, CarouselButton } from "./Carousel.styles";
import process from "../../assets/images/process.jpg";
import prototipation from "../../assets/images/prototipation.jpg";
import journey from "../../assets/images/journey.jpg";
import development from "../../assets/images/development.jpg";

const projectsData = [
  {
    id: 1,
    title: "Projeto SIEBC",
    company: "Petrobras",
    description:
      "Projeto desenvolvido para captação de gás natural na Bacia de Campos",
    image: prototipation,
    details:
      "Esse projeto utilizei o figma e o design system do cliente Petrobras. Esse projeto é destinado a extração de gás natura na Bacia de Campos.",
  },
  {
    id: 2,
    title: "Projeto ACES",
    company: "Petrobras",
    description:
      "Projeto desenvolvido para inclusão de equipamentos e sua análise de risco",
    image: journey,
    details:
      "Projeto para criação de novos equipamentos, inspeções técnicas dos equipamentos e suas respectivas análise de risco.",
  },
  {
    id: 3,
    title: "Projeto Potal Multimarcas",
    company: "YDUQS",
    description: "Projeto desenvolvido para captação de leads.",
    image: development,
    details:
      "Projeto para captação de leads de potenciais alunos de acordo com a marca preferida como: Estácio, Wyden, IBMEC e IDOMED.",
  },
  {
    id: 4,
    title: "Projeto Retenção de Clientes",
    company: "QUALICORP",
    description: "Projeto desenvolvido para retenção de clientes.",
    image: process,
    details:
      "Projeto para retenção e negociação com clientes de planos de saúde do grupo Qualicorp.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselButton onClick={prevProject}>&lt;</CarouselButton>
      <ProjectCard project={projectsData[currentIndex]} />
      <CarouselButton onClick={nextProject}>&gt;</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
