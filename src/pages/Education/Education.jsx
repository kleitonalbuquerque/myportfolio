import React from "react";
import {
  EducationContainer,
  EducationTitle,
  Timeline,
  TimelineItem,
  TimelineContent,
  Institution,
  Degree,
  Period,
  TimelineDot,
} from "./Education.styles";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "IBMR",
      degree: "Pós Graduação Lato Sensu em UX Designer",
      period: "2021 - 2022",
      description:
        "Atuar com técnicas, ferramentas, elaboração de hipóteses, pesquisas com o stakeholder e entender as melhores práticas do mercado. Além disso, ter o conhecimento técnico para a aplicação de processos e métodos de concepção de serviços digitais e produtos que irão garantir a melhor experiência para o usuário.",
    },
    {
      id: 2,
      institution: "Unicarioca",
      degree: "Graduação em Análise de Desenvolvimento de Sistemas",
      period: "2015 - 2018",
      description:
        "Especificar, projetar, implementar e gerenciar sistemas de informação e desenvolver softwares em ambientes de programação diversos.",
    },
  ];

  return (
    <EducationContainer id="education">
      <EducationTitle>Formação Acadêmica</EducationTitle>

      <Timeline>
        {educationData.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineDot />
            <TimelineContent>
              <Institution>{item.institution}</Institution>
              <Degree>{item.degree}</Degree>
              <Period>{item.period}</Period>
              <p>{item.description}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
