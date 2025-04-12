import styled from "styled-components";

export const ExperienceContainer = styled.section`
  padding: 5rem 2rem;
  background: #2c3e50;
`;

export const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #3498db;
    border-radius: 2px;
  }
`;

export const ExperienceList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ExperienceItem = styled.div`
  background: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  border-left: 4px solid #3498db;

  h4 {
    margin: 1rem 0 0.5rem;
    color: #2c3e50;
    font-size: 1.1rem;
  }
`;

export const Company = styled.h3`
  font-size: 1.4rem;
  color: #3498db;
  margin-bottom: 0.5rem;
`;

export const Position = styled.p`
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const Period = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

export const ResponsibilitiesList = styled.ul`
  margin-left: 1rem;
`;

export const ResponsibilityItem = styled.li`
  margin-bottom: 0.5rem;
  color: #34495e;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #3498db;
  }
`;
