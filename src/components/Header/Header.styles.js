import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: auto;
    margin: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem;
  display: block;
  font-size: 0.9rem;

  &:hover {
    color: #3498db;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    justify-content: flex-end;
  }
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: color 0.3s;
  padding: 0.5rem;

  &:hover {
    color: #3498db;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
