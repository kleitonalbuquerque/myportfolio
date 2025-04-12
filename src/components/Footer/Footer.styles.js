import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const ContactInfo = styled.div`
  & > p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
  }
`;

export const SocialMedia = styled.div`
  & > div {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    & > a {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: #3498db;
      }
    }
  }
`;
