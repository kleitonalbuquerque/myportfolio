import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 5rem 2rem;
  background: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  aspect-ratio: 1/1;

  @media (min-width: 992px) {
    width: 40%;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  color: #333;

  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
    color: #2c3e50;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #3498db;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #3498db;
    border-radius: 2px;
  }
`;

export const AboutDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
`;

export const AboutSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`;

export const SkillTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Highlight = styled.span`
  color: #3498db;
  font-weight: 600;
`;
