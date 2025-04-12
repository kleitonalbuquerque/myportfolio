import React from "react";
import {
  FooterContainer,
  FooterContent,
  ContactInfo,
  SocialMedia,
} from "./Footer.styles";
import {
  FaGithub,
  FaLinkedin,
  FaFigma,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <ContactInfo>
          <h3>Contato</h3>
          <p>
            <FaEnvelope /> kleiton2102@gmail.com
          </p>
          <p>
            <FaPhone />
            <a href={`https://wa.me/21970086562`} target="_blank">
              +55 (21) 97008-6562
            </a>
          </p>
        </ContactInfo>
        <SocialMedia>
          <h3>Redes Sociais</h3>
          <div>
            <a
              href="https://github.com/kleitonalbuquerque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/kleiton-albuquerque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://figma.com/@kleiton84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma />
            </a>
          </div>
        </SocialMedia>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
