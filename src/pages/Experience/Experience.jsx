import React from "react";
import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceList,
  ExperienceItem,
  Company,
  Position,
  Period,
  Description,
  ResponsibilitiesList,
  ResponsibilityItem,
} from "./Experience.styles";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: "Mirante Tecnologia",
      position: "UX/UI && Desenvolvedor Front-end Sênior",
      period: "Out 2024 - Presente",
      description:
        "Desenvolvimento de aplicações web modernas utilizando React e TypeScript. Prototipação utilizando o figma utilizando o Design System do cliente.",
      responsibilities: [
        "Liderança técnica do time front-end",
        "Implementação de arquitetura de micro-frontends",
        "Otimização de performance (redução de 40% no tempo de carregamento)",
        "Realização de Discovery para melhorar a jornada do cliente com seu produto",
      ],
    },
    {
      id: 2,
      company: "YDUQS",
      position: "Desenvolvedor Front-end Sênior",
      period: "Jun 2022 - Set 2024",
      description: "Desenvolvimento de interfaces institucionais.",
      responsibilities: [
        "Criação de componentes reutilizáveis",
        "Integração com APIs REST",
        "Implementação de testes unitários",
      ],
    },
    {
      id: 3,
      company: "Qualicorp",
      position: "Desenvolvedor Front-end Pleno",
      period: "Nov 2021 - Fev 2023",
      description: "Desenvolvimento de Sistema Corporativo.",
      responsibilities: [
        "Criação de componentes reutilizáveis",
        "Integração com APIs REST",
        "Utilização de Neo4J e VueJS",
        "Implementação de testes unitários",
      ],
    },
    {
      id: 4,
      company: "IK Solution",
      position: "Desenvolvedor Front-end Pleno",
      period: "Jan 2021 - Jun 2022",
      description:
        "Desenvolvimento de Sistema Corporativo e sites institucionais.",
      responsibilities: [
        "Criação de componentes reutilizáveis",
        "Integração com APIs REST",
        "Utilização VueJS",
        "Implementação de testes unitários",
        "Desenvolvimento WordPress",
      ],
    },
  ];

  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Experiência Profissional</ExperienceTitle>

      <ExperienceList>
        {experienceData.map((exp) => (
          <ExperienceItem key={exp.id}>
            <Company>{exp.company}</Company>
            <Position>{exp.position}</Position>
            <Period>{exp.period}</Period>
            <Description>{exp.description}</Description>

            <h4>Principais Responsabilidades:</h4>
            <ResponsibilitiesList>
              {exp.responsibilities.map((item, index) => (
                <ResponsibilityItem key={index}>{item}</ResponsibilityItem>
              ))}
            </ResponsibilitiesList>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default Experience;
