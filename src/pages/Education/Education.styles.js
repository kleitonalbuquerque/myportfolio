import styled from "styled-components";

export const EducationContainer = styled.section`
  padding: 5rem 2rem;
  background: #2c3e50;
`;

export const EducationTitle = styled.h2`
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

export const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #3498db;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: -30px;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3498db;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #3498db;
`;

export const TimelineContent = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export const Institution = styled.h3`
  font-size: 1.3rem;
  color: #3498db;
  margin-bottom: 0.5rem;
`;

export const Degree = styled.p`
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

export const Period = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
`;
