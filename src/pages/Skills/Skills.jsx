import React from "react";
import {
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillItem,
  SkillName,
  SkillLevel,
} from "./Skills.styles";

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: "Vue", level: 90 },
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 65 },
    ],
  };

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Minhas Habilidades</SkillsTitle>

      <SkillsGrid>
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category}>
            <CategoryTitle>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryTitle>

            {skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel level={skill.level}>
                  <div className="level-bar"></div>
                  <span>{skill.level}%</span>
                </SkillLevel>
              </SkillItem>
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
