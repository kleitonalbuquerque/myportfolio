import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutTitle,
  AboutDescription,
  AboutImage,
  AboutSkills,
  SkillTag,
  Highlight,
} from "./About.styles";
import profileImage from "../../assets/images/profile.jpg"; // Ajuste o caminho para sua imagem

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML/CSS",
    "Node.js",
    "TypeScript",
    "Tailwind",
    "Figma",
    "Design de Interface",
    "Discovery",
    "Design Thinking",
  ];

  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutImage src={profileImage} alt="Foto de perfil" />

        <AboutText>
          <AboutTitle>Sobre Mim</AboutTitle>
          <AboutDescription>
            Sou um desenvolvedor front-end apaixonado por criar interfaces
            modernas e responsivas. Com experiência em React e JavaScript, busco
            sempre aprender novas tecnologias e melhorar minhas habilidades para
            entregar produtos de alta qualidade.
          </AboutDescription>
          <AboutDescription>
            Minha jornada na programação começou em 2015 e desde então tenho
            trabalhado em diversos projetos pessoais e profissionais que me
            permitiram crescer como desenvolvedor.
          </AboutDescription>
          <AboutDescription>
            Também sou<Highlight> Designer UX/UI especializado</Highlight> em
            criar experiências digitais intuitivas e
            <Highlight> desenvolvedor Front-end</Highlight> com foco em
            implementação fiel de designs. Minha dupla formação me permite{" "}
            <Highlight>pontes entre design e código</Highlight>, garantindo que
            cada interface não apenas pareça incrível, mas funcione
            perfeitamente.
          </AboutDescription>
          <AboutDescription>
            Com <Highlight>5+ anos de experiência</Highlight>, já auxiliei mais
            de 5 empresas a melhorarem suas métricas de usabilidade e conversão
            através de:
          </AboutDescription>

          <ul>
            <li>Pesquisas de usuário e testes de usabilidade</li>
            <li>Design de interfaces responsivas e acessíveis</li>
            <li>Implementação front-end com React e frameworks modernos</li>
            <li>Criação de sistemas de design escaláveis</li>
          </ul>

          <h3>Tecnologias mais utilizadas:</h3>
          <AboutSkills>
            {skills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </AboutSkills>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
