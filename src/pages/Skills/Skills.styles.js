import styled from "styled-components";

export const SkillsContainer = styled.section`
  padding: 5rem 2rem;
  background: #fff;
`;

export const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
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

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillCategory = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
`;

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background: #3498db;
    border-radius: 2px;
  }
`;

export const SkillItem = styled.div`
  margin-bottom: 1.2rem;
`;

export const SkillName = styled.p`
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .level-bar {
    flex-grow: 1;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: ${(props) => props.level}%;
      background: #3498db;
      border-radius: 4px;
      transition: width 1s ease;
    }
  }

  span {
    font-size: 0.8rem;
    color: #7f8c8d;
    width: 40px;
  }
`;
