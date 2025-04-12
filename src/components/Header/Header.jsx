import React from "react";
import {
  HeaderContainer,
  Nav,
  NavList,
  NavItem,
  NavLink,
  SocialIcons,
  SocialIconLink,
} from "./Header.styles";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="#about">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#education">Formação</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Habilidades</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#experience">Experiência</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projetos</NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <SocialIcons>
        <SocialIconLink
          href="https://github.com/kleitonalbuquerque"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink
          href="https://linkedin.com/in/kleiton-albuquerque"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink
          href="https://figma.com/@kleiton84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
        </SocialIconLink>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
